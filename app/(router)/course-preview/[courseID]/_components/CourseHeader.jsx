import React from 'react'

function CourseHeader( { courseInfo } ) {
	return ( 
		<h1 className='font-bold text-[20px] mb-5'>{ courseInfo?.name }</h1>
	)
}

export default CourseHeader