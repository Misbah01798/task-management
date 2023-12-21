import { Link } from 'react-router-dom'
import Container from '../Container'

import MenuDropdown from './MenuDropdown'
import bg from '../../../assets/bg.png'
import logo from '../../../assets/logo1.png'

const Navbar = () => {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    }}>
      <div className='fixed w-full bg-white bg-opacity-50 z-10 shadow-sm rounded-badge'>
        <div className='py-4 border-b-[1px] '>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              {/* Logo */}
              <Link to='/'>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                  <img
                  className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
                  </div>
                </div>
              </Link>
              {/* Dropdown Menu */}
              <MenuDropdown />
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Navbar
