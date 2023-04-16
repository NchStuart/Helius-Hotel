export interface User {
    readonly id: Number;
    readonly reservationId: Number;
    username: String;
    fullName: String;
    email: String;
    password: String;
    level: Number;
    phoneNumber: String;
    status: Number;
}

export interface UserLogin {
    email: String,
    password: String
}
