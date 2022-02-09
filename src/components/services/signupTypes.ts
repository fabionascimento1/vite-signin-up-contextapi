export interface ISignup{
    name: string,
    email: string,
    password: string
}

export interface ISignupFunctions extends ISignup {
    signup: (name: string, email: string, password: string) => Promise<void>
}