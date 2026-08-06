"use client";

import { useEffect, useState } from "react";
import DiningPopup from "./DiningPopup";

export default function PopupWrapper() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("popup-shown");

    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("popup-shown", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return <DiningPopup open={open} onClose={() => setOpen(false)} href="#" />;
}
