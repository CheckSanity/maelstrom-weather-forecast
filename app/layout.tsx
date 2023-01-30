import './../assets/styles/_resets.scss'
import './../assets/styles/_variables.scss'
import './../assets/styles/_global.scss'

import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import { Josefin_Sans, Roboto } from '@next/font/google'


import Sidebar from '@/components/common/sidebar/siderbar'

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
})

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <head />
    <body>
    <StyledComponentsRegistry>
      <div><Sidebar />{children}</div>
    </StyledComponentsRegistry>
    </body>
    </html>
  )
}
