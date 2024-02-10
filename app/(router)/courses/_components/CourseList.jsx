import GlobalApi from '@/app/_utils/GLobalApi';
import React, { useEffect, useState } from 'react';
import CourseItem from './CourseItem';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function CourseList() { 

	useEffect( () => { 
		getAllCourses();
	}, [] );

	const [courseList, setCourseList] = useState( [] );

	const getAllCourses = () => { 
		GlobalApi.getAllCourses().then( response => { 
			//console.log( courseList );
			setCourseList( response?.courseLists )
		} )
	}

	return (
		<div className='p-5 bg-white rounded-lg mt-5'>
			<div className='flex items-center justify-between mb-5'>
				<h1 className='text-[20px] text-primary font-bold'>All Courses</h1>
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filter" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All</SelectItem>
						<SelectItem value="free">Free</SelectItem>
						<SelectItem value="paid">Paid</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
				{ courseList.length > 0 ? 
					courseList.map( ( item, index ) => ( 
						<div key={ index }>
							<CourseItem course={ item } />
						</div>
					) )
					:
					[1, 2, 3, 4, 5, 6, 7 ].map( ( item, index ) => ( 
						<div key={ index } className='w-full h-[240px] rounded-xl bg-slate-200 animate-pulse'>
						</div>
					) ) 
				}
			</div>

		</div>
	)
}

export default CourseList