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

export interface UserAuthenticated {
    id_usuario: Number;
    nome_usuario: String;
    nome_completo: String;
    email: String;
    nivel: Number;
    telefone: String;
    id_reserva: Number;
    status: Number;
}
