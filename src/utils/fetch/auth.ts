import { ForgotResponse, ResponseLogin, ResponseSignup } from "../../types/user"

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
  return response.json()
}

export const persistLogin = async (): Promise<ResponseLogin> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/persistLogin`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include"
  })
  if (!response.ok) throw new Error()
  return await response.json()
}

export const logout = async (): Promise<void> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/deconectare`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include"
  })
  if (!response.ok) throw new Error()
  return response.json()
}


export const forgotPassword = async (email: string): Promise<ForgotResponse> => {

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),

  })
  if (!response.ok) {
    const { message } = await response.json()
    throw new Error(message)
  }
  return response.json()

}

export const resetPassword = async (data: { token: string, parola: string }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/reseteazaParola/${data.token}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parola: data.parola }),

  })
  if (!response.ok) {
    const { message } = await response.json()
    throw new Error(message)
  }

  return response.json()
}