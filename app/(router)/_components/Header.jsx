import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
	<div className='flex justify-between p-4 bg-white border-b'>
		<div className='flex gap-2 p-2 border rounded-md'>
			<Search className='h-5 w-5' />
			<input type="search" placeholder="Search" className='outline-none' />
		</div>
		<div className='flex items-center gap-4'>
			<BellDot className='text-gray-500' />
			<Button>Get Started</Button>
		</div>
	</div>
  )
}

export default Header