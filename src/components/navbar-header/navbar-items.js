import React from 'react'
import Link from 'next/link'


const navbar_items = ({href,text,active}) => {
  return (
<Link href={href}>

 {text}
<a className={`nav__link ${active ? "active": "" } `} > {text}</a>



</Link>
  );

};

export default navbar_items;