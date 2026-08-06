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

  return <DiningPopup open={open} onClose={() => setOpen(false)} href="https://www.opentable.com.au/booking/restref/availability?lang=en-AU&correlationId=8cdbec62-b146-4e22-b085-4190fc9c4e8e&restRef=279680&otSource=Restaurant%20website" />;
}
