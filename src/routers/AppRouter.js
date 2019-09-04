import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import DiaryPage from '../components/DiaryPage'
import AddFoodPage from '../components/AddFoodPage'
import AddFoodConfirmationPage from '../components/AddFoodConfirmationPage'
import CreateFoodPage from '../components/CreateFoodPage'
import CreateExercisePage from '../components/CreateExercisePage'
import UpdateFoodPage from '../components/UpdateFoodPage'
import UpdateTargetsPage from '../components/UpdateTargetsPage'
import ProgressPage from '../components/ProgressPage'
import UpdatePersonalDetailsPage from '../components/UpdatePersonalDetailsPage'
import AddExercisePage from '../components/AddExercisePage'
import AddExerciseConfirmationPage from '../components/AddExerciseConfirmationPage'
import UpdateExercisePage from '../components/UpdateExercisePage'

export const history = createHistory();

const AppRouter = () => {
  
  useEffect(()=>{  //sets scroll position back to 0 when changing address
    history.listen(() => {
      window.scrollTo(0,0)
    })
  },[])
  
  
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/diary" component={DiaryPage} />
          <PrivateRoute path="/add" component={AddFoodPage} />
          <PrivateRoute path="/add-food/:id" component={AddFoodConfirmationPage} />
          <PrivateRoute path="/add-exercise" component={AddExercisePage} />
          <PrivateRoute path="/add-exercise-confirmation/:id" component={AddExerciseConfirmationPage} />
          <PrivateRoute path="/create-food" component={CreateFoodPage} />
          <PrivateRoute path="/create-exercise" component={CreateExercisePage} />
          <PrivateRoute path="/update-food/:id" component={UpdateFoodPage}/>
          <PrivateRoute path="/update-exercise/:id" component={UpdateExercisePage}/>
          <PrivateRoute path="/update-targets" component={UpdateTargetsPage}/>
          <PrivateRoute path="/progress" component={ProgressPage}/>
          <PrivateRoute path="/personal-details" component={UpdatePersonalDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
