import React from 'react';
import {Card, CardImg, CardBody, Button} from 'reactstrap';
import './CourseCard.scss'
interface Props {
    courseImgLink: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
}

const CourseCard: React.FC<Props> = ({courseImgLink, courseName, courseDescription, coursePrice}) => {
    return(
        <Card className="course-card">
            <CardImg src={`https://drive.google.com/uc?export=view&id=${courseImgLink}`} alt=""/>
            <CardBody>
                <div className="course-card-name">{courseName}</div>
                <div className="course-card-description">{courseDescription}</div>
                <div className="course-card-price">{coursePrice}</div>
                <Button>View Course</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard;