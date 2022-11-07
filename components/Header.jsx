import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href='/'>home</Link>
            </li>
            <li>
                <Link href='/about'>about</Link>
            </li>
            <li>
                <Link href="/post/[id]" as="/post/first">
                    first post
                </Link>
            </li>
            <li>
                <Link href="/post/[id]" as="/post/second">
                    second post
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header