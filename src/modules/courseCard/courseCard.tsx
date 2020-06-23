import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import './courseCard.scss'
interface Props {
    courseImg: string;
    courseName: string;
    courseDescription: string;
}

const CourseCard: React.FC<Props> = ({courseImg, courseName, courseDescription}) => {
    return(
        <Card className="courseCard">
            <CardImg src={`https://drive.google.com/uc?export=view&id=${courseImg}`} alt=""/>
            <CardBody>
                <CardTitle>{courseName}</CardTitle>
                <CardText>{courseDescription}</CardText>
                <Button>View Course</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard;