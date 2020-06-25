import React from 'react';
import { Col, Button, FormGroup, Label, Input, Row, Container, Form } from 'reactstrap';
import './CreateCourseForm.scss';
import * as Yup from 'yup';
//import {Props} from './CourseForm.d';
import {withFormik, ErrorMessage, Field} from 'formik';

const courseSchema = Yup.object().shape({
    courseName: Yup.string()
      .required("Course name is required!"),
    courseDescription: Yup.string()
      .min(2, "Description is too short!")
      .max(50, "Description is too short! is too long!")
      .required("Description is too short! is required!"),
});

const CreateCourseForm = ({ values, handleSubmit }: any) => {
    return(
        <Container style={{marginBottom: '1rem'}}>
            <div className="course-form">Course Form Management</div>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="courseName" sm={4}>Course Name:</Label>
                    <Col sm={8}>
                        <Field type="text" name="courseName" id="courseName" placeholder="Course Name" />
                    </Col>
                    {/* <ErrorMessage name="courseName"/> */}
                </FormGroup>
                <FormGroup row>
                    <Label for="courseDescription" sm={4}>Course Description:</Label>
                    <Col sm={8}>
                        <Field type="textarea" name="courseDescription" id="courseDescription" placeholder="Course Description" />
                    </Col>
                    {/* <ErrorMessage name="courseDescription"/> */}
                </FormGroup>
                <FormGroup row>
                    <Label for="coursePrice" sm={4}>Course Price:</Label>
                    <Col sm={8}>
                        <Field type="text" name="coursePrice" id="coursePrice" placeholder="Course Price" />
                    </Col>
                    {/* <ErrorMessage name="course"/> */}
                </FormGroup>
                <Row>
                    <Col sm={{size: 3, offset:1}}>
                        <Button type="submit" color="success">Create</Button>
                    </Col>
                    <Col sm={{size: 3, offset:1}}>
                        <Button color="warning">Update</Button>
                    </Col>
                    <Col sm={{size: 3, offset:1}}>
                        <Button color="danger">Delete</Button>
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
    //validationSchema: courseSchema,
    handleSubmit: (values, { resetForm, props, setErrors, setSubmitting }) => {
        console.log(values);
    },
})(CreateCourseForm);


export default CreateCourseFormFormik;