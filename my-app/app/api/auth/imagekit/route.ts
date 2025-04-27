import config from "@/lib/config"
import ImageKit from "imagekit"
import { NextResponse } from "next/server"
import { getUploadAuthParams } from "@imagekit/next/server"





// const imagekit = new ImageKit(
//     {
//         publicKey : config.env.imagekit.publicKey,
//         privateKey : config.env.imagekit.privateKey,
//         urlEndpoint : config.env.imagekit.urlEndpoint

//     }
// )






export async function GET()
{
    const {token, expire, signature} = getUploadAuthParams({
        privateKey : config.env.imagekit.privateKey,
        publicKey : config.env.imagekit.publicKey
    })
    
    
    return Response.json({token,expire,signature,publicKey : `${config.env.imagekit.publicKey}`})
    

}