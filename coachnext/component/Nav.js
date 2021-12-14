import React from 'react';
import Link from "next/link";
import style from "../styles/Nav.module.css";

const Nav = () => {
    return (
      <nav className={style.nav}>
      <ul>
          <li>
              <Link href="/">SALE</Link>
          </li>
          <li>
              <Link href="/">NEW</Link>
          </li>
          <li>
              <Link href="/women">WOMEN</Link>
          </li>
          <li>
              <Link href="/men">MEN</Link>
          </li>
          <li>
              <Link href="/coachloved">COACH (RE)LOVED</Link>
          </li>
          <li>
              <Link href="/coachinsider">COACH INSIDER</Link>
          </li>
          <li>
              <Link href="/customization">CUSTOMIZATION</Link>
          </li>
          <li>
              <Link href="/gifts">GIFTS</Link>
          </li>
      </ul>

      </nav>
    )
}
export default Nav;
