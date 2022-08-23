export interface IUserData{
    id: string;
    name: string;
    email: string;
    password: string;
}

interface UserSession{
    isLoggedIn: boolean;
    userData: IUserData;
    token: string;
}

export default UserSession;