import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function SideNav() {
	const menu = [ 
		{ 
			id: 1, 
			name: "All Courses", 
			icon: BookOpen
		}, { 
			id: 2, 
			name: "Memberships", 
			icon: BadgeIcon
		}, { 
			id: 3, 
			name: "Instructors", 
			icon: GraduationCap
		}
	];

	return ( 
		<div className='p-5 h-screen bg-white shadow-sm border-r'>
			<Image src="/logo.svg" className='ml-auto mr-auto' alt="Logo Ipsum" width={170} height={45} />
			<hr className='mt-7' />
			<div className='mt-8'>
				{ menu.map( ( item, index ) => ( 
					<div className="group flex gap-3 mt-2 p-3 text-[18px] text-gray-500 items-center cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200">
						<item.icon className='group-hover:animate-bounce' />
						<h2>{ item.name }</h2>
					</div>
				) ) }
			</div>
		</div>
	);
}

export default SideNav