import { useSession } from 'next-auth/react'

export const useUserInfo = () => {
  const { data: session } = useSession()
  const user = session?.user ?? null

  return user
}
