import React from 'react';
import CourseCard from '../../modules/courseCard/courseCard'
import {Container, Row, Col} from 'reactstrap'

const CourseList = () => {
    return(
        <Container>
            <Row>
                <CourseCard courseImg="1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu" courseName="Tynker Basic" courseDescription="For children"/>
                <CourseCard courseImg="1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu" courseName="Tynker Basic" courseDescription="For children"/>
                <CourseCard courseImg="1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu" courseName="Tynker Basic" courseDescription="For children"/>
                <CourseCard courseImg="1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu" courseName="Tynker Basic" courseDescription="For children"/>
                <CourseCard courseImg="1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu" courseName="Tynker Basic" courseDescription="For children"/>
            </Row>
        </Container>
    )
}

export default CourseList;