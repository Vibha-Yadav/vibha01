import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header'; 
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/Frame 19.png';
// import aboutimage1 from './images/download.png';
import Presentation from './Components/Presentation';
// import Contact from './Components/Contact';

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Navbar/> */}
      {/* <Switch> */}
      <Header/>
      <Feature/>
      {/* <Route path="/about">
            <About image={aboutimage} title='WQI' button='WQI'/>
          </Route> */}
      <About image={aboutimage} title='WQI' button='WQI'/>
      <Presentation/>
      {/* <Contact/> */}
      

      {/* </Switch> */}
    </div>
    // </Router>
    
  //   <Router>
  //   <div className="App">
  //     <Navbar />
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/about" component={About} />
  //       {/* Add more routes for other pages if needed */}
  //     </Switch>
  //   </div>
  // </Router>
  );
}

export default App;
