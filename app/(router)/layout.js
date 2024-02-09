import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

function layout( { children } ) {
  return (
	<div>
		<div className='sm:w-64 hidden sm:block fixed'>
			<SideNav />
		</div>
		<div className='sm:ml-64'>
			<Header />
			<div className='p-4'>
				{children}
			</div>
		</div>
	</div>
  )
}

export default layout