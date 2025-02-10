import { NavbarControls } from './components/navbar-controls/navbar-controls'
import { Navbar } from './components/navbar/navbar'

export const Header: React.FC = () => {
  return (
    <header className='h-[65px] border-b-[1px] py-4 backdrop-blur-2xl'>
      <div className='container flex items-center justify-between'>
        <Navbar />
        <NavbarControls />
      </div>
    </header>
  )
}
