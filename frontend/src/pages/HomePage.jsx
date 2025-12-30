import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton} from '@clerk/clerk-react'
import toast from 'react-hot-toast'

export default function HomePage() {

  
  return (
    <div>
      <button className='btn btn-primary' onClick={() => toast.success("This is a success toast")}>Click me</button>
      <SignedOut>
        <SignInButton mode='modal'>Login</SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <UserButton/>
    </div>
  )
}
