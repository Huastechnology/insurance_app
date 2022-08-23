import fetchJson from  '../../lib/fetchJson'
import TMutateUser from '../../../@customTypes/mutateUser'

interface IMutatedLogoutUserParams {
    mutateUser: TMutateUser
    callback: (data?:any) => void
}

export type TLogoutUser = () => Promise<void>


type TMutatedLogoutUser = (params: IMutatedLogoutUserParams) => TLogoutUser

const logoutUser: TMutatedLogoutUser =
  ({ mutateUser, callback }) =>
  async () => {
    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false)
    callback()
  }

export default logoutUser