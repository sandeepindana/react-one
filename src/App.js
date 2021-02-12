import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the New Blog";  //App Component
  const likes = 50;
  const href = "http://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
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
    </div>
  );
}

export default App;
