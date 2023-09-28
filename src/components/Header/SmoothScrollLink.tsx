'use client'

import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, useCallback, useState } from 'react';

interface SmoothScrollLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string
  text: string
  offset?: number; 
  setActiveMobileMenu: (value: any) => void
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ targetId, text, offset = 0, setActiveMobileMenu, ...rest }) => {

  const scrollToSection = useCallback(() => {
    const section = document.getElementById(targetId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scroll({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    setActiveMobileMenu(false)
  }, [targetId, offset, setActiveMobileMenu]);

  return (
    <button {...rest} onClick={scrollToSection} className="w-full py-4 text-center text-base font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-red-500 focus:text-red-500 md:px-3 md:text-base">{text}</button>
  )
}
