'use client'
import WelcomeContent from '@/components/welcome/content'
import MainContent from '@/components/main/content'
import { useStore } from '@/providers/store'

export default function Home() {
  const store = useStore()
  return (
    <>
      {(store.forecasts && store.forecasts.length > 0 && <MainContent />) || (
        <WelcomeContent />
      )}
    </>
  )
}
