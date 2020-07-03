import React from 'react'
import CreateCourseForm from '../../../modules/course/courseForm/CreateCourseForm';
import Header from '../../../modules/header/Header';

const CoursePage = () => {
    return(
        <>
            <Header/>
            <CreateCourseForm/>
            <footer>BCD</footer>
        </>
    )
}

export default CoursePage;