export type User = {
    _id: string;
    nume: string;
    prenume: string;
    email: string;
    role: "admin" | "user";    
}