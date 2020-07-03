import React, {lazy, Suspense} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Spinner} from 'reactstrap'

const CoursePage = lazy(() => import('./pages/coursePage/CoursePage'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const CreateCoursePage = lazy(() => import('./pages/coursePage/courseCreate/courseCreatePage'))


const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path='/'  component={HomePage}/>
          <Route exact path='/courses' component={CoursePage}/>
          <Route exact path='/courses/create' component={CreateCoursePage}/>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
