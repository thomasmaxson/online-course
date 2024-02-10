import GlobalApi from '@/app/_utils/GLobalApi';
import React, { useEffect } from 'react';

function CourseList() { 
	const getAllCourses = () => { 
		GlobalApi.getAllCourses().then( response => { 
			console.log( response );
		} )
	}

	useEffect( () => { 
		getAllCourses();
	}, [] );

	return (
		<div>CourseList</div>
	)
}

export default CourseList