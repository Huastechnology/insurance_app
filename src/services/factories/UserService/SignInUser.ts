import fetchJson from  '../../lib/fetchJson'
import TMutateUser from '../../../@customTypes/mutateUser'
import UserSession from '../../../@customTypes/dto/UserSession'
import { IUserLogin } from '../../../@customTypes/entities/user'

interface ISignInUserParams {
    mutateUser: TMutateUser
}

export type TSignInUser = (body: IUserLogin) => Promise<UserSession | undefined>

type TMutatedSignInUser = (params: ISignInUserParams) => TSignInUser

const signInUser: TMutatedSignInUser =
  ({ mutateUser }) =>
  (body) =>
    mutateUser(
      fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
    )

export default signInUser