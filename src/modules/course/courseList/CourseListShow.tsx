import React, {useEffect} from 'react';
import CourseCard from '../courseCard/CourseCard'
import {Container, Row, Col} from 'reactstrap'
import useCourse from '../../../store/Store'

interface Items {
    courseID: string;
    courseImgLink: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
}

const CourseList = () => {
    const [state, actions] = useCourse();    
    
    useEffect(()=>{
        actions.fetchCourse();
    }, [actions]);

    const loadCourseData = state.course.map((item: any) => {
        return(
            <Col key={item.courseID} style={{marginBottom:'1rem'}}>
                <CourseCard courseImgLink={item.courseImgLink} courseName={item.courseName} courseDescription={item.courseDescription} coursePrice={item.coursePrice}/>
            </Col>
        )
    })

    return(
        <Container>
            <h1 className="mt-4 mb-4" style={{textAlign:'center'}}>Courses List</h1>
            <Row xs="3">
                {loadCourseData}
            </Row>
        </Container>
    )
}

export default CourseList;