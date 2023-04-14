import React from 'react';
import Link from 'next/link';
import navbar_items from './navbar-items';



const Menu_List = [
{
     text: "Home",
     href: "/"
},
{
    text: "About",
    href: "/about"
},
{
    text: "Contact Us ",
    href: "/contact"
},


];



function NavBar() {
    return (
        <header>
            <nav className='nav'>
                    <a href={'/'}>
                        <h1 className='logo'>this is test code </h1>
                    </a>

                <div className='nav__menu_bar'>
                    <div></div>

                    <div></div>

                    <div></div>
                </div>

                <div className='nav__menu_list'>
                    {Menu_List.map((menu,/* index */) => {
                        return (
                        
                        <div key={menu.text}>
                            <p>this is test one</p>
                        <navbar_items{...menu} />  
                        <p>this is test two</p>          

                        </div>
                    );
                    }
                        )
                            }
                </div>
            </nav>
        </header>
    );
}

export default NavBar;