"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import CourseContent from './_components/CourseContent';
import CourseHeader from './_components/CourseHeader';
import CourseVideo from './_components/CourseVideo';

function CoursePreview( { params } ) { 
	const [ courseInfo, setCourseInfo ] = useState();

	useEffect( () => { 
		params && getCourseInfoByID();

	}, [ params ] )

	const getCourseInfoByID = () => { 
		GlobalApi.getCourseByID( params?.courseID ).then( response => { 
			//console.log( courseInfo )
			setCourseInfo( response?.courseList )

		})
	}

	return ( 
		<div className='grid grid-cols-1 md:grid-cols-4 gap-5 p-5'>
			<div className='col-span-3'>
				<div className='p-5 bg-white rounded-lg'>
					<CourseHeader courseInfo={ courseInfo } />
					<CourseVideo videoUrl={ courseInfo?.chapters[0]?.video?.url } />
					<CourseContent courseInfo={ courseInfo } />
				</div>
			</div>
			<div>
				Sidebar
			</div>
		</div>
	)
}

export default CoursePreview