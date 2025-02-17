import { NavbarControls } from './components/navbar-controls/navbar-controls'
import { Navbar } from './components/navbar/navbar'

export const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 flex h-[65px] items-center border-b-[1px] bg-background'>
      <div className='container flex items-center justify-between'>
        <Navbar />
        <NavbarControls />
      </div>
    </header>
  )
}
