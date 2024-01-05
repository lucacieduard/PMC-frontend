export type User = {
    _id: string;
    nume: string;
    prenume: string;
    email: string;
    role: "admin" | "user";
}

export type ResponseLogin = {
    status: string,
    user: User,
}

export type ResponseSignup = {
    status: string,
    newUser: User,
}