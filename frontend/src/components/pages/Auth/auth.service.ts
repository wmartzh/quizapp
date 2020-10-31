interface SignInI {
  email: string
  password: string
}
interface SignUpI extends SignInI {
  username: string
}

const URL = 'https://localhost:8000'

const Fetch = async (body: any, URI: string) => {
  const response = await fetch(`${URL}/${URI}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export const signInService = async ({ email, password }: SignInI) => {
  console.log(Fetch({ email, password }, 'signin'))
  return 'success'
}

export const signUpService = ({ email, username, password }: SignUpI) => {
  console.log(Fetch({ email, username, password }, 'signup'))
  return 'success'
}

export const logoutService = () => {
  console.log(Fetch({}, 'logout'))
  return 'success'
}
