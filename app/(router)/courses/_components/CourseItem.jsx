import Image from 'next/image'
import React from 'react'

function CourseItem( { course } ) {
	return (
		<div>
			<Image src={ course?.banner?.url } alt={ course?.name } width={ 500 } height={ 150 } className='rounded-t-xl' />

			<div className='p-2 border rounded-b-xl'>
				<h2 className='font-bold hover:text-primary'>{ course.name }</h2>
				<p className='text-[12px] text-gray-500'>{ course.author }</p>
				<div>
					<p className='text-[12px] text-gray-500'>{ course.paidCourse ?  'Paid' : 'Free' }</p>

				</div>
			</div>

		</div>
	)
}

export default CourseItem