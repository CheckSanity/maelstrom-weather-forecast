'use client'

import './../assets/styles/_resets.scss'
import './../assets/styles/_variables.scss'
import './../assets/styles/_global.scss'

import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import { CookiesProvider } from 'react-cookie'
import { StoreProvider } from '@/providers/store'

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
