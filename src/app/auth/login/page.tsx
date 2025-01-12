import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/auth/options'
import LoginForm from '@/components/Auth/LoginForm'

const LoginPage = async () => {
  const session = await getServerSession(authOptions)
  console.log('Login Page:', session)
  if (session && session.accessToken) {
    return redirect('/')
  }

  return (
    <div className='container max-w-2xl'>
      <LoginForm />
    </div>
  )
}

export default LoginPage
