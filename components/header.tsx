"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50  bg-white/95 shadow-sm
      }`}
    >
      <div className="container  mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">HomeMatch</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/properties"
              className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Properties
            </Link>
            <Link
              href="/ai-features"
              className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              AI Features
            </Link>
            <Link
              href="/virtual-tours"
              className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              Virtual Tours
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
            >
              About Us
            </Link>
          </nav>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20"
            >
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link
              href="/properties"
              className="block text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Properties
            </Link>
            <Link
              href="/ai-features"
              className="block text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-blue-400"
            >
              AI Features
            </Link>
            <Link
              href="/virtual-tours"
              className="block text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Virtual Tours
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-blue-400"
            >
              About Us
            </Link>
            <div className="pt-4 flex flex-col space-y-4">
              <Button
                variant="outline"
                className="w-full text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
              >
                <Link href="/login" className="w-full">
                  Log In
                </Link>
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                <Link href="/signup" className="w-full">
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
