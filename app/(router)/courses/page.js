"use client"

import React from 'react';
import BannerWelcome from './_components/BannerWelcome';
import CourseList from './_components/CourseList';

function Courses() {
  return (
	<div className='grid md:grid-cols-4 p-5'>
    <div className='col-span-3'>
      <BannerWelcome />
      <CourseList />
    </div>
    <div className=''>
      Sidebar
    </div>

  </div>
  )
}

export default Courses