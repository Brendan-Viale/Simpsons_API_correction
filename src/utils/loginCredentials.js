export const credentials = [
    {
        username:"yolo",
        password:"yolo"
    },
    {
        username:"aze",
        password:"aze"
    }
]

export const verifyCredentials = (values)=>{
    let isValid = false
    credentials.forEach((credential)=>{
        if(credential.username === values.username 
        && credential.password === values.password)
            isValid = true
    })
    return isValid
}