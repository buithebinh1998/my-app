import React from 'react';
import { Col, Button, FormGroup, Label, Input, Row, Container, Form } from 'reactstrap';
import './CreateCourseForm.scss';
import * as Yup from 'yup';
import useCourse from './../../store/Store'
import {withFormik, ErrorMessage} from 'formik';

interface Props {
    courseID: string;
    courseImgLink: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
}

const courseSchema = Yup.object().shape({
    courseName: Yup.string()
        .required("Course name is required!"),
    courseDescription: Yup.string()
        .min(2, "Description is too short!")
        .max(50, "Description is is too long!")
        .required("Description is required!"),
    coursePrice: Yup.number()
        .required("Course price is required!")
        .typeError("Course price must be a number!"),
});

const CreateCourseFunc = (payload: any) => {
    const [, actions] = useCourse();
    actions.createCourse(payload);
}

const CreateCourseForm = ({ values, handleSubmit, handleChange }: any) => {
    return(
        <Container style={{marginBottom: '1rem'}}>
            <div className="course-form">Course Form Management</div>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="courseName" sm={4}>Course Name:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="text" name="courseName" id="courseName" placeholder="Course Name" value={values.courseName} />
                    </Col>
                    <Col className="error-message" sm={8}>
                        <ErrorMessage name="courseName"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="courseDescription" sm={4}>Course Description:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="textarea" name="courseDescription" id="courseDescription" placeholder="Course Description" />
                    </Col>
                    <Col className="error-message"  sm={8}>
                        <ErrorMessage name="courseDescription"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="coursePrice" sm={4}>Course Price:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="text" name="coursePrice" id="coursePrice" placeholder="Course Price" />
                    </Col>
                    <Col  className="error-message" sm={8}>
                        <ErrorMessage name="coursePrice"/>
                    </Col>
                </FormGroup>
                <Row>
                    <Col sm={{size: 3, offset:4}}>
                        <Button type="submit" color="success">Create</Button>
                    </Col>
                    <Col sm="3">
                        <Button color="warning">Update</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

const CreateCourseFormFormik = withFormik({
    mapPropsToValues: () => {
        return{
            courseName: '',
            courseDescription: '',
            coursePrice: ''
        };
    },
    validationSchema: courseSchema,
    handleSubmit: (values) => {
        const payload: Props;
        payload.courseName = values.courseName;
        payload.courseDescription = values.courseDescription;
        payload.coursePrice = values.coursePrice;
        payload.courseImgLink = "1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu";
        payload.courseID = "5";
        console.log(payload);
    },

})(CreateCourseForm);


export default CreateCourseFormFormik;