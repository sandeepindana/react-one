import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = "Welcome to the New Blog";  //App Component
  const likes = 50;
  const href = "http://www.google.com";
  return (
    <Router>

      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
      {/* <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{123}</p>
        <p>{"Hello World"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        <p>{Math.random() * 10}</p>
        <p><a href={href} target="_blank">Click Me</a></p>

      </div> */}
    </Router>


  );
}

export default App;
