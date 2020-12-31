import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import ViewTodos from './pages/ViewTodos';
import AddTodos from './pages/AddTodos';
import Navbar from "./components/navbar";


function App() {
  return (
    <Router>
      <GlobalProvider>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/todos' component={ViewTodos} />
          <Route exact path='/todos/new' component={AddTodos} /> */
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

function Component1() {
  return (
    <>Component 1</>
  )
};

function Component2() {
  return (
    <>Component 2</>
  )
};

function Component3() {
  return (
    <>Component 3</>
  )
};

export default App;
