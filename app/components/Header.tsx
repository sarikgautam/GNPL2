"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function Header() {

  const [openMobile, setOpenMobile] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const menuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <header className="w-full">

      {/* MAIN NAV */}
      <div className="sticky top-0 z-50 bg-black border-b border-[#501f3a]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT - GNPL LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/gnpl.jpg"
              alt="GNPL Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-white font-bold tracking-wide text-sm sm:text-base">
              Gold Coast Nepalese Premier League
            </span>
          </Link>


          {/* DESKTOP MENU */}
          <nav ref={menuRef} className="hidden md:flex items-center gap-8 text-white font-semibold text-sm">

            <NavLink href="/">Home</NavLink>

            <Dropdown
              label="Seasons"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              <DropLink href="/seasons/season-2">Season 2</DropLink>
              <DropLink href="/seasons/season-1">Season 1</DropLink>
            </Dropdown>

            <Dropdown
              label="Teams"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              <DropLink href="/teams/himalayan-heat">Himalayan Heat</DropLink>
              <DropLink href="/teams/goldcoast-super-kings">Gold Coast Super Kings</DropLink>
              <DropLink href="/teams/yeti-strikers">Yeti Strikers</DropLink>
              <DropLink href="/teams/gorkha-thunders">Gorkha Thunders</DropLink>
            </Dropdown>

            <Dropdown
              label="Fixtures"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            >
              <DropLink href="/fixtures">Fixtures</DropLink>
              <DropLink href="/results">Results</DropLink>
              <DropLink href="/table">Points Table</DropLink>
              <DropLink href="/stats">Stats</DropLink>
            </Dropdown>

            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <Link
              href="/admin"
              className="bg-[#cb2d6f] hover:bg-[#ee4c83] text-white px-4 py-1.5 rounded-full transition"
            >
              Admin
            </Link>

          </nav>


          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpenMobile(!openMobile)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </div>


      {/* SUPPORT BAR (GCGCC) */}
      <div className="bg-[#0f0f0f] border-b border-[#501f3a] py-3">

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <img
            src="/gcgcc.jpg"
            alt="Gold Coast Gorkhas"
            className="h-10 object-contain"
          />

          <p className="text-gray-300 text-sm text-center">
            Supported by <span className="text-[#cb2d6f] font-semibold">
              Gold Coast Gorkhas Cricket Club
            </span>
          </p>

          <img
            src="/gcgcc.jpg"
            alt="Gold Coast Gorkhas"
            className="h-10 object-contain"
          />

        </div>
      </div>


      {/* MOBILE MENU */}
      {openMobile && (
        <div className="md:hidden bg-black border-t border-[#501f3a] p-6 space-y-3 text-white">

          <MobileLink href="/" close={() => setOpenMobile(false)}>Home</MobileLink>

          <MobileTitle>Seasons</MobileTitle>
          <MobileSubLink href="/seasons/season-2" close={() => setOpenMobile(false)}>Season 2</MobileSubLink>
          <MobileSubLink href="/seasons/season-1" close={() => setOpenMobile(false)}>Season 1</MobileSubLink>

          <MobileTitle>Teams</MobileTitle>
          <MobileSubLink href="/teams/himalayan-heat" close={() => setOpenMobile(false)}>Himalayan Heat</MobileSubLink>
          <MobileSubLink href="/teams/goldcoast-super-kings" close={() => setOpenMobile(false)}>Gold Coast Super Kings</MobileSubLink>
          <MobileSubLink href="/teams/yeti-strikers" close={() => setOpenMobile(false)}>Yeti Strikers</MobileSubLink>
          <MobileSubLink href="/teams/gorkha-thunders" close={() => setOpenMobile(false)}>Gorkha Thunders</MobileSubLink>

          <MobileTitle>Fixtures</MobileTitle>
          <MobileSubLink href="/fixtures" close={() => setOpenMobile(false)}>Fixtures</MobileSubLink>
          <MobileSubLink href="/table" close={() => setOpenMobile(false)}>Points Table</MobileSubLink>

          <MobileLink href="/gallery" close={() => setOpenMobile(false)}>Gallery</MobileLink>
          <MobileLink href="/sponsors" close={() => setOpenMobile(false)}>Sponsors</MobileLink>
          <MobileLink href="/contact" close={() => setOpenMobile(false)}>Contact</MobileLink>
          <MobileLink href="/admin" close={() => setOpenMobile(false)}>Admin</MobileLink>

        </div>
      )}

    </header>
  )
}

/* ------------------- */

function Dropdown({ label, children, openMenu, setOpenMenu }: any) {

  const isOpen = openMenu === label

  return (
    <div className="relative">

      <button
        onClick={() => setOpenMenu(isOpen ? null : label)}
        className="hover:text-[#cb2d6f] transition"
      >
        {label} ▾
      </button>

      {isOpen && (
        <div className="absolute top-8 left-0 bg-black border border-[#501f3a] min-w-[200px] p-3 space-y-2 z-50">
          {children}
        </div>
      )}

    </div>
  )
}

function DropLink({ href, children }: any) {
  return (
    <Link href={href} className="block hover:text-[#ee4c83] transition">
      {children}
    </Link>
  )
}

function NavLink({ href, children }: any) {
  return (
    <Link href={href} className="hover:text-[#cb2d6f] transition">
      {children}
    </Link>
  )
}

function MobileLink({ href, children, close }: any) {
  return (
    <Link href={href} onClick={close} className="block py-1">
      {children}
    </Link>
  )
}

function MobileSubLink({ href, children, close }: any) {
  return (
    <Link href={href} onClick={close} className="block ml-4 text-sm text-gray-300">
      {children}
    </Link>
  )
}

function MobileTitle({ children }: any) {
  return <p className="mt-4 text-sm font-semibold text-[#cb2d6f]">{children}</p>
}
