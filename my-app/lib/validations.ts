import { z } from "zod";

//creating form validations here...
export const signupSchema = z.object(
    {

        fullName: z.string().min(3,{message : "Must be 3 or more characters long"}),
        email: z.string().email({message : "Must be a valid email-address"}),
        universityId : z.coerce.string({message : "Must be a valid universityID"}),
        universityCard : z.string().nonempty("University Card is Required"),
        password : z.string().min(8,{message : "Must be atleast 8 characters"}).max(16,{message : "Must be 8-16 characters long"}).refine((val) =>
            /[!@#$%^&*]/.test(val), {
              message: "Password must include at least one special character (!@#$%^&*)",
          })
    }

);



export const signinSchema = z.object(
    {
        email: z.string().email({message : "Must be a valid email"}),
        password : z.string().min(8,{message : "Must be atleast 8 characters"}).max(16,{message : "Must be 8-16 characters long"}).refine((val) =>
            /[!@#$%^&*]/.test(val), {
              message: "Password must include at least one special character (!@#$%^&*)",
          }) 
        
    }
)
