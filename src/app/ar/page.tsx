import { NavigationAr } from '@/components/ar/NavigationAr'
import { HeroSectionAr } from '@/components/ar/HeroSectionAr'
import { FormSectionAr } from '@/components/ar/FormSectionAr'
import { AboutSectionAr } from '@/components/ar/AboutSectionAr'
import { ServicesSectionAr } from '@/components/ar/ServicesSectionAr'
import { CredentialsSectionAr } from '@/components/ar/CredentialsSectionAr'
import { ContactSectionAr } from '@/components/ar/ContactSectionAr'

export default function HomeAr() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationAr />
      <HeroSectionAr />
      <FormSectionAr />
      <AboutSectionAr />
      <ServicesSectionAr />
      <CredentialsSectionAr />
      <ContactSectionAr />
    </main>
  )
}


