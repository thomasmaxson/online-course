"use client"

import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SideNav() {
	const menu = [ 
		{ 
			id: 1, 
			name: 'All Courses', 
			icon: BookOpen,
			path: '/courses',
			target: '_self'
		}, { 
			id: 2, 
			name: 'Memberships', 
			icon: BadgeIcon,
			path: '/memberships',
			target: '_self'
		}, { 
			id: 3, 
			name: 'Instructors', 
			icon: GraduationCap,
			path: '/instructors',
			target: '_self'
		}
	];

	const currentPath = usePathname();



	return ( 
		<div className='p-5 h-screen bg-white shadow-sm border-r'>
			<Image src="/logo.svg" className='ml-auto mr-auto' alt="Logo Ipsum" width={170} height={45} />
			<hr className='mt-7' />
			<div className='mt-8'>
				{ menu.map( ( item, index ) => ( 
					<Link href={ item.path } target={ item.target } className={`group flex gap-3 mt-2 p-3 text-[18px] items-center rounded-md transition-all ease-in-out duration-200 ${ currentPath.includes( item.path ) ? 'text-white bg-primary cursor-default' : 'text-gray-500 hover:text-primary hover:bg-gray-200' }`}>
						<item.icon className={ currentPath.includes( item.path ) ? '' : 'group-hover:animate-bounce'} />
						<h2>{ item.name }</h2>
					</Link>
				) ) }
			</div>
		</div>
	);
}

export default SideNav