import React from 'react'
import CourseList from '../../modules/course/courseList/CourseList';
import Header from '../../modules/header/Header';

const CoursePage = () => {
    return(
        <>
            <Header/>
            <CourseList/>
            <footer>BCD</footer>
        </>
    )
}

export default CoursePage;