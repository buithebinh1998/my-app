import React, {useEffect, useState} from 'react';
import CourseCard from '../../modules/courseCard/CourseCard'
import {Container, Row, Col} from 'reactstrap'
import axios from 'axios'

interface Items {
    courseID: string;
    courseImgLink: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
}

const CourseList = () => {
    const [courseData, setCourseData] = useState<Items[]>([]);
    useEffect(()=>{
        axios
            .get(
                "https://5ef2b40425da2f001622827d.mockapi.io/course",
            )
            .then((response) => {
                setCourseData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const loadCourseData = courseData.map((item) => {
        return(
            <Col key={item.courseID} style={{marginBottom:'1rem'}}>
                <CourseCard courseImgLink={item.courseImgLink} courseName={item.courseName} courseDescription={item.courseDescription} coursePrice={item.coursePrice}/>
            </Col>
        )
    })

    return(
        <Container>
            <Row xs="3">
                {loadCourseData}
            </Row>
        </Container>
    )
}

export default CourseList;