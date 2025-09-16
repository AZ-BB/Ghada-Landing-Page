import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { CredentialsSection } from '@/components/CredentialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Navigation } from '@/components/Navigation'
import { FormSection } from '@/components/FormSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FormSection />
      <AboutSection />
      <ServicesSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  )
}
