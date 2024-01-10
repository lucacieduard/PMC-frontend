export type User = {
    _id: string;
    nume: string;
    prenume: string;
    email: string;
    telefon: string,
    clubSportiv: string,
    role: "admin" | "user",
    parolaSchimbataLa?: Date,
    creatLa: Date
}

export type ResponseLogin = {
    status: string,
    user: User,
}

export type ResponseSignup = {
    status: string,
    newUser: User,
}

export type ForgotResponse = {
    status: "success" | "fail",
    message: string
}