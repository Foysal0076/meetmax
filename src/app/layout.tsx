import '@/styles/globals.css'
import '@/styles/globals.scss'

import { Roboto } from 'next/font/google'

import { AuthProvider } from '@/auth/AuthProvider'
import FavIconTags from '@/components/Common/FavIconTags'
import MainLayout from '@/components/Common/MainLayout'
import NextThemeProvider from '@/components/Common/NextThemeProvider'
import { Navbar } from '@/components/Navbar'
import { PROJECT_INFORMATION } from '@/lib/constants'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
})

export const metadata = {
  title: PROJECT_INFORMATION.name,
  description: PROJECT_INFORMATION.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning className={`${roboto.variable}`}>
      <FavIconTags />
      <body>
        <AuthProvider>
          <NextThemeProvider>
            <div className='flex min-h-screen flex-col pt-[3.875rem] md:pt-[4.875rem]'>
              <Navbar />
              <MainLayout>
                <main>{children}</main>
              </MainLayout>
            </div>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
