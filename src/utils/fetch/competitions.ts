import { ResponseCompetition, ResponseCompetitions } from "../../types/competitie"

export const getAllCompetitions =async () : Promise<ResponseCompetitions> => { 
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii`)
    if(!response.ok) throw new Error()
    return response.json()  
}

export const getOneCompetition = async (slug : string | undefined) : Promise<ResponseCompetition> =>{
    if(!slug) throw new Error()
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/competitii/${slug}`)
    if(!response.ok) throw new Error()
    return response.json()
}