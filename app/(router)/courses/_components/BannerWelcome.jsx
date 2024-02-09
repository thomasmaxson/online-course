import Image from 'next/image'
import React from 'react'

function BannerWelcome() {
  return (
	<div className='flex gap-5 items-center p-5 bg-white rounded-xl'>
		<Image src='/panda.png' alt='Panda illustration coding' width={100} height={100} />
		<div>
			<h1 className='font-bold text-[27px]'>Welcome to the <span className='text-primary'>Online Course Portal</span></h1>
			<h2 className='text-gray-500'>Explore, Learn and Build!</h2>
		</div>
	</div>
  )
}

export default BannerWelcome