import UserSession from './dto/UserSession'

export declare type mutateCallback <Data = any > = (
    currentValue:undefined| Data,
) => Promise <undefined|Data> | undefined | Data

type TMutateUser = (
    data?: UserSession | Promise<UserSession> | mutateCallback<UserSession>,
    shouldRevalidate?: boolean,
) => Promise<UserSession | undefined>

export default TMutateUser