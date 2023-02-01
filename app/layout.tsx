'use client'

import './../assets/styles/_resets.scss'
import './../assets/styles/_variables.scss'
import './../assets/styles/_global.scss'

import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'
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
        <StoreProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}
