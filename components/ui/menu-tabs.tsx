"use client";

import { useState } from "react";

const menus = [
  {
    id: "dinner",
    label: "Dinner",
    title: "Dinner Menu",
    description:
      "Discover Japanese-inspired small plates, fresh nigiri and sashimi, robata-grilled dishes, signature creations and premium ingredients.",
    pdf: "/A3-latest-food-menu-(2nd%20sep%202026).pdf",
    button: "View Food Menu",
  },
  {
    id: "cocktail",
    label: "Cocktail",
    title: "Cocktails & Drinks",
    description:
      "Explore our drinks selection, signature cocktails and Japanese-inspired flavours, perfect for dinner and late-night celebrations.",
    pdf: "/Liar-Liar-Drinks.pdf",
    button: "View Drinks Menu",
  },
  {
    id: "dessert",
    label: "Dessert",
    title: "Something Sweet",
    description:
      "Finish your experience with a sweet treat. Ask our team about the current dessert selection.",
    pdf: null,
    button: null,
  },
  {
    id: "brunch",
    label: "Sunday Brunch",
    title: "Sunday at Liar Liar",
    description:
      "Make your Sunday memorable with great food, drinks and a vibrant atmosphere. Contact our team for the current brunch offering.",
    pdf: null,
    button: null,
  },
];

export default function MenuTabs() {
  const [activeMenu, setActiveMenu] = useState("dinner");

  const selectedMenu = menus.find((menu) => menu.id === activeMenu)!;

  return (
    <div>
      {/* MENU TAB BUTTONS */}
      <div
        role="tablist"
        aria-label="Explore our menus"
        className="flex flex-wrap justify-center gap-3 border-b border-[#F0E9DF]/20 pb-5"
      >
        {menus.map((menu) => {
          const isActive = activeMenu === menu.id;

          return (
            <button
              key={menu.id}
              type="button"
              role="tab"
              id={`tab-${menu.id}`}
              aria-selected={isActive}
              aria-controls="menu-panel"
              onClick={() => setActiveMenu(menu.id)}
              className={`px-5 py-3 font-space text-sm uppercase tracking-wider transition-colors duration-300 md:px-7 ${
                isActive
                  ? "bg-[#FF6A55] text-[#220715]"
                  : "border border-[#F0E9DF]/30 text-[#F0E9DF] hover:border-[#FF6A55] hover:text-[#FF6A55]"
              }`}
            >
              {menu.label}
            </button>
          );
        })}
      </div>

      {/* ACTIVE MENU CONTENT */}
      <div
        id="menu-panel"
        role="tabpanel"
        aria-labelledby={`tab-${selectedMenu.id}`}
        className="mx-auto max-w-4xl py-10 text-center md:py-14"
      >
        <h3 className="font-migra text-3xl text-[#F0E9DF] md:text-5xl">
          {selectedMenu.title}
        </h3>

        <p className="mx-auto mt-6 max-w-2xl font-space leading-8 text-[#F0E9DF]/75">
          {selectedMenu.description}
        </p>

        {selectedMenu.pdf && (
          <a
            href={selectedMenu.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-[#FF6A55] bg-[#FF6A55] px-7 py-3 font-space text-sm uppercase tracking-wider text-[#220715] transition-colors hover:bg-[#F0E9DF] hover:border-[#F0E9DF]"
          >
            {selectedMenu.button}
          </a>
        )}
      </div>
    </div>
  );
}
