import React from 'react'
import Markdown from 'react-markdown'

function CourseContent( { courseInfo } ) {
	return ( 
		<Markdown>{ courseInfo?.description }</Markdown>
	)
}

export default CourseContent