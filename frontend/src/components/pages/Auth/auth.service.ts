import { API_ROUTES } from '../../../routes'

interface SignInI {
  email: string
  password: string
}
interface SignUpI extends SignInI {
  name: string
  username: string
}

const Fetch = async (body: any, URI: string) => {
  const response = await fetch(`${API_ROUTES.base}${URI}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export const signInService = async ({ email, password }: SignInI) => {
  console.log(Fetch({ email, password }, API_ROUTES.auth.signin))
  return 'success'
}

export const signUpService = ({ email, name, username, password }: SignUpI) => {
  console.log(
    Fetch({ email, name, username, password }, API_ROUTES.auth.signup)
  )
  return 'success'
}

export const logoutService = () => {
  console.log(Fetch({}, 'logout'))
  return 'success'
}
