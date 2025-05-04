"use client" 

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
    Image,
} from "@imagekit/next";
import { useRef, useState } from "react";
import { toast } from "sonner"
import config from "@/lib/config";




const ImageUpload = () => {
    // State to keep track of the current upload progress (percentage)
    const [progress, setProgress] = useState(0);
    const [uploadedFile, setUploadedFile] = useState <Record<string,any> | null>(null);

    // Create a ref for the file input element to access its files easily
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Create an AbortController instance to provide an option to cancel the upload if needed.
    const abortController = new AbortController();

    const authenticator = async () => {
        try {
            // Perform the request to the upload authentication endpoint.
            const response = await fetch(`/api/auth/imagekit`);
            if (!response.ok) {
                // If the server response is not successful, extract the error text for debugging.
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }

            // Parse and destructure the response JSON for upload credentials.
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            // Log the original error for debugging before rethrowing a new error.
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };

    
    //  * Handles the file upload process.
   
    const handleUpload = async () => {
        // Access the file input element using the ref
        const fileInput = fileInputRef.current;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            alert("Please select a file to upload");
            return;
        }

        // Extract the first file from the file input
        const file = fileInput.files[0];
        console.log(`this fill is coming after reading upload : ${file}`);

        // Retrieve authentication parameters for the upload.
        let authParams;
        try {
            authParams = await authenticator();
        } catch (authError) {
            console.error("Failed to authenticate for upload:", authError);
            return;
        }
        const { signature, expire, token, publicKey } = authParams;

        // Call the ImageKit SDK upload function with the required parameters and callbacks.
        try {
            const uploadResponse = await upload({
                // Authentication parameters
                expire,
                token,
                signature,
                publicKey,
                file,
                fileName: file.name, // Optionally set a custom file name
                // Progress callback to update upload progress state
                onProgress: (event) => {
                    setProgress((event.loaded / event.total) * 100);
                },
                // Abort signal to allow cancellation of the upload if needed.
                abortSignal: abortController.signal,
            });

            console.log("Upload response:", uploadResponse);
            setUploadedFile(uploadResponse)
            toast("Image Uploaded Successfully")
            // console.log(uploadedFile);
           
            

        } catch (error) {
            // Handle specific error types provided by the ImageKit SDK.
            if (error instanceof ImageKitAbortError) {
                console.error("Upload aborted:", error.reason);
            } else if (error instanceof ImageKitInvalidRequestError) {
                console.error("Invalid request:", error.message);
            } else if (error instanceof ImageKitUploadNetworkError) {
                console.error("Network error:", error.message);
            } else if (error instanceof ImageKitServerError) {
                console.error("Server error:", error.message);
            } else {
                // Handle any other errors that may occur.
                console.error("Upload error:", error);
            }
        }
    };




    
    return (
        <>
            {/* File input element using React ref */}
            <input type="file" ref={fileInputRef} />
            {/* Button to trigger the upload process */}
            <button type="button" onClick={handleUpload} className="bg-yellow-300 text-black w-1/2 p-2 items-center rounded-sm">
                Upload file
            </button>

            <br />
            {/* Display the current upload progress */}
            Upload Progress: <progress value={progress} max={100}>
              
            </progress>



            {
                uploadedFile && 
                <Image
                    urlEndpoint={config.env.imagekit.urlEndpoint}
                    src={uploadedFile.filePath}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            }


           

         
        </>
    );
};

export default ImageUpload;