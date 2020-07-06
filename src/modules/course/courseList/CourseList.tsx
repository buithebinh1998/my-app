import React, { useEffect } from "react";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import { Table, UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from "reactstrap";
import useCourse from "../../../store/Store";

interface Items {
  courseID: string;
  courseImgLink: string;
  courseName: string;
  courseDescription: string;
  coursePrice: string;
}

const CourseList = (props: RouteComponentProps) => {
  const [state, actions] = useCourse();

  useEffect(() => {
    actions.fetchCourse();
  }, [actions]);

  const routeChange=()=> {
    let path = '/courses/create';
    let history = props.history;
    history.push(path);
  }

  const loadCourseData = state.course.map((item: Items) => {
    return (
      <tr>
        <th scope="row">{item.courseID}</th>
        <td>{item.courseName}</td>
        <td>
          <img
            style={{ width: "50px" }}
            src={`https://drive.google.com/uc?export=view&id=${item.courseImgLink}`}
            alt=""
          />
        </td>
        <td
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "400px",
          }}
        >
          {item.courseDescription}
        </td>
        <td>{item.coursePrice}</td>
        <td>
          <UncontrolledButtonDropdown>
            <DropdownToggle caret>Select</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </td>
      </tr>
    );
  });

  return (
    <>
    <div className="d-flex mt-4 mb-4">
        <h3 className="my-0 mx-4">Courses List</h3>
        <Button color="success" onClick={routeChange}>Create Courses</Button>
        
    </div>
    <Table responsive hover>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Course Image</th>
          <th>Course Description</th>
          <th>Course Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{loadCourseData}</tbody>
    </Table>
    </>
  );
};

export default withRouter(CourseList);
