"use client";

import Link from "next/link";

export default function WhatsAppWidget() {
  return (
    <Link
      href="https://wa.link/61nitp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg transition-all duration-300 group-hover:block md:block">
        Chat with us
      </span>

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-9 w-9 fill-white"
        >
          <path d="M19.11 17.2c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.3 1.28.48 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          <path d="M16.01 3.2c-7.08 0-12.8 5.72-12.8 12.8 0 2.26.6 4.47 1.73 6.4L3.2 28.8l6.57-1.72c1.86 1.02 3.95 1.56 6.24 1.56h.01c7.07 0 12.79-5.73 12.79-12.8S23.08 3.2 16.01 3.2zm0 23.14c-2.03 0-4.01-.55-5.74-1.59l-.41-.25-3.9 1.02 1.04-3.8-.27-.43a10.4 10.4 0 01-1.6-5.56c0-5.76 4.68-10.44 10.44-10.44s10.44 4.68 10.44 10.44-4.68 10.45-10.44 10.45z" />
        </svg>
      </div>
    </Link>
  );
}
