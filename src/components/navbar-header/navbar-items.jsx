import React from 'react'
import Link from 'next/Link'
import { active } from 'sortablejs'
import "../styles/style.css"

const navbar_items = (href,text,active) => {
  return (
<Link href={href}>
<a className={`
nav__Link ${active ? 'active': "" } `} 

>
{text}


</a>

</Link>
  )

}

export default navbar_items