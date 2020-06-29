import React from 'react'
import CourseList from './CourseList';
import CreateCourseForm from '../../modules/courseForm/CreateCourseForm';
import Header from '../../modules/header/Header';

const CoursePage = () => {
    return(
        <>
            <Header/>
            <CreateCourseForm/>
            <CourseList/>
            <footer>BCD</footer>
        </>
    )
}

export default CoursePage;