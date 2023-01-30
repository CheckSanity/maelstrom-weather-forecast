import WelcomeContent from '@/components/welcome/content'
import MainContent from '@/components/main/content'

export default function Home() {
  const state = false
  return <>{(state && <MainContent />) || <WelcomeContent />}</>
}
