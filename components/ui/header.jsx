import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, LayoutDashboard, PenBox, StarsIcon, FileText, GraduationCap } from 'lucide-react'
import { Button } from './button'


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (

    <header className='fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href="/">
          <Image src="/logo.png" alt=" SenseAI Logo" width={100} height={60}
            className='h-12 object-contain py-1 w-auto' />
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Industry Insights</span>
              </Button>
            </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarsIcon className='h-4 w-4' />
                <span className='hidden md:block'>Growth tools</span>
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className='flex items-center  gap-2'>
                  <FileText className='h-4 w-4' />
                  Build Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/ai-cover-letter"} className='flex items-center  gap-2'>
                  <PenBox className='h-4 w-4' />
                  Cover Letter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/interview"} className='flex items-center  gap-2'>
                  <GraduationCap className='h-4 w-4' />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>
              <SignInButton>
                <button variant="outline">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
              appearance={{
                elements:{
                  avatarBox:"w-10 h-10",
                  userButtonPopoverCard:"shadow-x1",
                  userPreviewMainIdentifier:"font-semibold"
                }
              }}
              afterSignOutUrl='/'
              />
            </SignedIn>
        </div>
      </nav>        
    </header>
  )
}

export default Header