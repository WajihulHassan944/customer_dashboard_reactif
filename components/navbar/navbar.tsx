"use client"

import * as React from 'react'
import { Search, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const SearchInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-[320px]">
        <input
          ref={ref}
          className={cn(
            'flex w-full rounded-md border border-[gray] px-4 h-[52px] text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-100 focus-visible:border-purple-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
            className
          )}
          {...props}
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray" size={20} />
      </div>
    )
  }
)

export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#FAFAFA2A] sticky top-0 z-50">
      <div className="h-[88px] px-8 flex items-center justify-between">
        
        {/* Left: Search Bar */}
        <SearchInput placeholder="Search" />

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          
          <Button 
            className="rounded-full bg-[#E5E7EB] hover:bg-gray-300 text-black font-semibold h-11 px-7 shadow-none"
          >
            Home Page
          </Button>

          {/* Notification */}
          <div className="relative cursor-pointer p-2.5 rounded-full border border-gray hover:bg-gray-50 transition-all">
            <Bell size={22} className="text-white" />
            <span className="absolute top-2 right-3 w-2 h-2 bg-black border-2 border-white rounded-full"></span>
          </div>

          {/* User Avatar - Shadcn */}
          <div className="cursor-pointer">
            <Avatar className="h-[40px] w-[41px] ">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>UF</AvatarFallback>
            </Avatar>
          </div>

        </div>
      </div>
    </nav>
  )
}