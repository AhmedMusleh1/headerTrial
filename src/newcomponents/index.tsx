import React from 'react'
import { LogoContainer, Nav, NavLink, NavLinkContainer } from './NavElements'
import Image from 'next/image'
import LogoImage from '../../public/asssets/images/logo.jpg'
type Props = {}

const NavBar2 = ( props: Props) => {
  return (

    <Nav>
            <LogoContainer>
                <Image
                src={LogoImage}
                alt='Logo'
                width={50}
                height={50}

                 />
            </LogoContainer>

            <NavLinkContainer>
              <NavLink href={"/"}>
                Home
              </NavLink>
            </NavLinkContainer>
    </Nav>

)
}

export default NavBar2