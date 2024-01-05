import { ResponseLogin, ResponseSignup } from "../../types/user"

export const signup = async (data: {
  nume: string,
  prenume: string,
  email: string,
  telefon: string,
  clubSportiv: string,
  parola: string,
  confirmParola: string
}): Promise<ResponseSignup> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/creeaza-cont`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include"
  })
  if (!response.ok) throw new Error()
  console.log(response)
  return response.json()
}

export const login = async (data: { email: string, parola: string }): Promise<ResponseLogin> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/autentificare`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include"
  })
  if (!response.ok) throw new Error()
  console.log(response)
  return response.json()
}