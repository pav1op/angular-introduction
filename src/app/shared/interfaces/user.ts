export interface User {
    givenName: string;
    surName: string;
    email: string;
    password: string;
}

export interface Credentials {
    emial: string;
    password: string;
}

export interface LoggedInUser {
    fullname: string;
    email: string;
}