import React from 'react'
import "../styles/style.css"

let Menu_List = [
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
                <a href={"/"}>
                    <a>
                        <h1 className='logo'>this is test code </h1>
                    </a>
                </a>

                <div className='nav__menu-bar'>
                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className='nav__menu-list'>
                    {Menu_List.map((menu, index) => {
                        return <>
                        <div key={menu.text}>
                            {menu.text}
                        

                        </div>
                        </>
                    })}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;