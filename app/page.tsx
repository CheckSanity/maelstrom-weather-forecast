'use client'
import WelcomeContent from '@/components/welcome/content'
import MainContent from '@/components/main/content'
import { useStore } from '@/providers/store'
import LoadingContent from '@/components/loading/content'

export default function Home() {
  const store = useStore()
  if (store.loading) {
    return <LoadingContent />
  }
  return (
    <>
      {(store.forecasts && store.forecasts.length > 0 && <MainContent />) || (
        <WelcomeContent />
      )}
    </>
  )
}
