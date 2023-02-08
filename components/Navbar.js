import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
            <ul>
              <Link href='/'><li>HOME</li></Link>
              <Link href='/blog'><li>BLOGS</li></Link>
              <Link href='/about'><li>ABOUT ME</li></Link>
              <Link href='/contact'><li>CONTACT US</li></Link>

            </ul>
          </nav>
  )
}

export default Navbar