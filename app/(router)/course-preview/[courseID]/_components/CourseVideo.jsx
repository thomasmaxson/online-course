import React from 'react'

function CourseVideo( { videoUrl } ) { 
	return ( 
		<video 
			width={ 1000 }
			height={ 250 }
			className='rounded-sm'
			controls>
				<source src={ videoUrl } type="video/mp4" />
			</video>
	)
}

export default CourseVideo