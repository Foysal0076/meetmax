import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/auth/options'
import { Home } from '@/components/Home'

const HomePage = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.accessToken) {
    return redirect('/auth/login')
  }

  return <Home />
}

export default HomePage
