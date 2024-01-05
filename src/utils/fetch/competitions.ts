import { FormData } from "../../pages/Admin/AddCompetition/AddCompetition"
import { ResponseCompetition, ResponseCompetitions } from "../../types/competitie"

export const getAllCompetitions =async () : Promise<ResponseCompetitions> => { 
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii`,{credentials: "include"})
    if(!response.ok) throw new Error()
    return response.json()  
}

export const getOneCompetition = async (slug : string | undefined) : Promise<ResponseCompetition> =>{
    if(!slug) throw new Error()
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii/${slug}`,{credentials:"include"})
    if(!response.ok) throw new Error()
    return response.json()
}

export const createCompetition = async (data : FormData) : Promise<ResponseCompetition> =>{
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii`,{
    headers: {
        "Content-Type": "application/json",
      },
        method:"POST",
        body: JSON.stringify(data)
    })
    if(!response.ok) throw new Error()
    console.log(response)
    return response.json()
}

export const deleteCompetition = async (id :string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii/${id}`, {
        method:"DELETE",

    })
    if(!response.ok) throw new Error()
    return response.json()
}