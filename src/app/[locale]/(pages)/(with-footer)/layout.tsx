import { Footer } from '@/components/shared'

export default async function WithHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='flex-auto'>{children}</main>
      <Footer />
    </>
  )
}
