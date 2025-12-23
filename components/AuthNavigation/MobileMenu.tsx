"use client";

import React, { useState } from "react";
import css from "./MobileMenu.module.css";
import Link from "next/link";

interface User {
  email: string;
}

interface MobileProps {
  isAuthenticated: boolean;
  user?: User; // ✅ optional
  handleLogout: () => void;
}

const MobileMenu = ({ isAuthenticated, user, handleLogout }: MobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={css.mobileMenu}>
      <button className={css.btn} onClick={toggle} aria-label="Open menu" />

      {isOpen && (
        <ul className={css.menuList}>
          {isAuthenticated ? (
            <>
              <li>
                <Link href="/profile" onClick={toggle}>
                  Profile
                </Link>
              </li>

              {user && <li>{user.email}</li>}

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/sign-in" onClick={toggle}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/sign-up" onClick={toggle}>
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
