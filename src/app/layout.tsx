import '@/styles/globals.css'
import '@/styles/globals.scss'

import { Roboto } from 'next/font/google'

import { AuthProvider } from '@/auth/AuthProvider'
import FavIconTags from '@/components/Common/FavIconTags'
import NextThemeProvider from '@/components/Common/NextThemeProvider'
import { Footer } from '@/components/Footer'
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
            <div className='flex min-h-screen flex-col justify-between pt-[3.75rem] md:pt-[4.5rem]'>
              <div>
                <Navbar />
                <main>{children}</main>
              </div>
              <Footer />
            </div>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
