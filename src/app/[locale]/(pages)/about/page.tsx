import { LINKS } from '@/constants'

import { Link } from '@/i18n'

export default async function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href={LINKS.Home}>Home</Link>
    </div>
  )
}
