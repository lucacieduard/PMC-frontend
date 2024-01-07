import { GridRowParams } from "@mui/x-data-grid"

export const getAllUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/`, {
        credentials: 'include'
    })
    console.log(response)
    if (!response.ok) throw new Error("Nu s-a putut prelua lista de utilizatori")
    return response.json()
}

export const deleteUser = async (id: string) => {
    const response = fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
    return response
}

export const updateUser = async (params: GridRowParams) => {
    console.log(params)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/utilizatori/${params.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params.row),
        credentials: 'include'
    })
    if (!response.ok) throw new Error("Nu s-a putut actualiza utilizatorul")
    return response.json()
}