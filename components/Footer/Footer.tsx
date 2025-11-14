"use client";

import { useEffect, useState } from "react";
import css from "./Footer.module.css";

interface Props {
  initialYear: number;
}

const Footer = ({ initialYear }: Props) => {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (currentYear !== year) {
      setYear(currentYear);
    }
  }, [year]);

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {year} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Vitalii</p>
          <p>
            Contact us:
            <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
