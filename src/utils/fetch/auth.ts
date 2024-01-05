export const signup = async (data )  =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/creeaza-cont`,{
     headers: {
         "Content-Type": "application/json",
       },
         method:"POST",
         body: JSON.stringify(data),
         credentials: "include"
     })
     if(!response.ok) throw new Error()
     console.log(response)
     return response.json()
 }