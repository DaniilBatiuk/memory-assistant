import { FeatureDictionary } from './components/feature-dictionary/feature-dictionary'
import { FeatureSection } from './components/feature-section/feature-section'
import { GetInTouch } from './components/get-in-touch/get-in-touch'
import { HeroSection } from './components/hero-section/hero-section'

export default async function Home() {
  return (
    <div className='container flex flex-col adaptive-margin-top-20-60 adaptive-row-gap-50-80'>
      <HeroSection />
      <FeatureSection />
      <FeatureDictionary />
      <GetInTouch />
    </div>
  )
}
