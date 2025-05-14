
import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Bell, ShoppingBag, Instagram, Twitter, Facebook, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-400 hover:text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/95 backdrop-blur">
            <MobileNav />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-white">URBAN WEAR</span>
          </Link>

          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <a href="https://instagram.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://twitter.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>

        <MainNav className="mx-6 hidden md:flex" />

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-9 bg-gray-900 border-gray-800 text-white placeholder:text-gray-400 focus:ring-blue-500"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-medium text-white">3</span>
            <span className="sr-only">Shopping cart</span>
          </Button>

          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
