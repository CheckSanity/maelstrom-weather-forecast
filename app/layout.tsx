'use client'

import './../assets/styles/_resets.scss'
import './../assets/styles/_variables.scss'
import './../assets/styles/_global.scss'

import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import { Josefin_Sans, Roboto } from '@next/font/google'
import { CookiesProvider } from 'react-cookie'
import { StoreProvider } from '@/providers/store'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CookiesProvider>
          <StoreProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StoreProvider>
        </CookiesProvider>
      </body>
    </html>
  )
}
