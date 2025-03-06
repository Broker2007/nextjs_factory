"use client"
import React, { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import logo_main from '@/assets/logo_vek.png'
import phone_header from '@/assets/Calling2.svg'
import Link from "next/link";
import Image from "next/image";
import cl from "./Header.module.scss"
import {MenuButton} from "@/components/ui/MenuButton/MenuButton";
import {usePathname} from "next/navigation";



const links = [
    {
        name: "ГЛАВНАЯ",
        path: "/",
    },
    {
        name: "ОБОРУДОВАНИЕ",
        path: "/equipment",
    },
    {
        name: "ПРОДУКЦИЯ",
        path: "/products",
    },
    {
        name: "О КОМПАНИИ",
        path: "/about",
    },
    {
        name: "КОНТАКТЫ",
        path: "/contact",
    },
];

function Header() {



    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const [isOpenMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpenMenu) setTimeout(() => setOpenMenu(false), 50);
    });

    useEffect(() => {
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;

        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        });

        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;
            if (
                startTouchX < 100 &&
                Math.abs(endTouchY - startTouchY) < 40 &&
                endTouchX > startTouchX
            )
                setOpenMenu(true);
            if (
                startTouchX < 240 &&
                Math.abs(endTouchY - startTouchY) < 40 &&
                endTouchX < startTouchX
            )
                setOpenMenu(false);
        });
    }, []);
  return (
      <header className="header">
          <Link href={"/"} >
              <Image src={logo_main} width={150} height={80} className={"image_logo"}/>
          </Link>

          <nav className={`header__nav ${isOpenMenu ? "active" : ""}`} ref={menuRef}>
              <ul className={"header__nav-list"}>
                  {links.map((link, index) => {
                      return (
                          <li className="header__nav-item">
                              <Link
                                  href={link.path}
                                  key={index}
                                  className={`${pathname === link.path ? cl.link_header : "color_nav"} ${cl.link_hover} text1 header__nav-item`}
                              >
                                  {link.name}
                              </Link>
                          </li>
                      );
                  })}
              </ul>
          </nav>
          <div className={"d-f ai-cen gap10 number_nav"}>
              <Image src={phone_header} width={25} height={25}/>
              <p className={"text1"}>
                  +7 (901) 181-11-12
              </p>
          </div>
          <MenuButton isActive={isOpenMenu} onClick={() => setOpenMenu(!isOpenMenu)} />
      </header>

  )
}

export default Header