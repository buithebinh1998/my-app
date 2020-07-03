import React from 'react';
import { Col, Button, FormGroup, Label, Input, Container, Form } from 'reactstrap';
import './CreateCourseForm.scss';
import * as Yup from 'yup';
import useCourse from '../../../store/Store'
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
        .max(1000, "Description is is too long!")
        .required("Description is required!"),
    coursePrice: Yup.number()
        .required("Course price is required!")
        .typeError("Course price must be a number!"),
});

const CreateCourseWrapper = (props: any) => {
    const [, actions] = useCourse();
    return <CreateCourseFormFormik {...props} createCourse = {actions.createCourse} />
}

const CreateCourseForm = ({ values, handleSubmit, handleChange }: any) => {
    return(
        <Container style={{marginBottom: '1rem'}}>
            <div className="course-form">Course Form Management</div>
            
            <Form >
                <FormGroup row className="justify-content-end mr-1">
                    <div className="mr-2">
                        <Button onClick={handleSubmit} type="submit" color="success">Create</Button>
                    </div>
                    <div className="mr-2">
                        <Button color="danger">Cancel</Button>
                    </div>
                </FormGroup>
                <FormGroup row>
                    <Label for="courseName" sm={4}>Course Name:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="text" name="courseName" id="courseName" placeholder="Course Name" value={values.courseName} />
                    </Col>
                    <Col className="error-message" sm={{size: '8', offset:'4'}}>
                        <ErrorMessage name="courseName"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="courseDescription" sm={4}>Course Description:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="textarea" name="courseDescription" id="courseDescription" placeholder="Course Description" />
                    </Col>
                    <Col className="error-message" sm={{size: '8', offset:'4'}}>
                        <ErrorMessage name="courseDescription"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="coursePrice" sm={4}>Course Price:</Label>
                    <Col sm={8}>
                        <Input onChange={handleChange} type="text" name="coursePrice" id="coursePrice" placeholder="Course Price" value={values.coursePrice}/>
                    </Col>
                    <Col  className="error-message" sm={{size: '8', offset:'4'}}>
                        <ErrorMessage name="coursePrice"/>
                    </Col>
                </FormGroup>
                
            </Form>
        </Container>
    )
}

const CreateCourseFormFormik = withFormik({
    mapPropsToValues: () => {
        return{
            courseName: '',
            courseDescription: '',
            coursePrice: 0
        };
    },
    validationSchema: courseSchema,
    handleSubmit: (values, {props}: any) => {
        const payload: Props = {
            courseID: "5",
            courseDescription : "",
            courseImgLink : "1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu",
            coursePrice : "",
            courseName : ""
        };
        const showPriceString = new Intl.NumberFormat("de-DE").format(values.coursePrice);
        payload.courseName = values.courseName;
        payload.courseDescription = values.courseDescription;
        payload.coursePrice = showPriceString+'Đ';
        payload.courseImgLink = "1zIXo2s6TqKL2-B_5nUJALXB-oojN8dgu";
        payload.courseID = "5";
        props.createCourse(payload);
        console.log(payload);
    },

})(CreateCourseForm);


export default CreateCourseWrapper;