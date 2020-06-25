import React from 'react'
import CourseList from './CourseList';
import CreateCourseForm from '../../modules/courseForm/CreateCourseForm';

const CoursePage = () => {
    return(
        <>
            <header>ABC</header>
            <CreateCourseForm/>
            <CourseList/>
            <footer>BCD</footer>
        </>
    )
}

export default CoursePage;