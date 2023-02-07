import './App.css'
import Navbar from './components/navbar'
import News from './components/News.js'
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() 
{
  const pagesize=7;
 const country="in";
  const [progress, setprogress] = useState(0);
  // apiKey = process.env.News_Api_Key
   const apiKey="03341833c81a446b874cb44b87a0af2e"

    return (
    
      <div>
<Router>
<Navbar/>
<LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
  <Routes>
    <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey} key="general" pagesize={pagesize} country={country} category="general"/>} />
    <Route exact path="/health" element={ <News apiKey={apiKey} setProgress={setprogress} key="health" pagesize={pagesize} country={country}category="health"/>} />
    <Route exact path="/sports" element={ <News apiKey={apiKey} setProgress={setprogress} key="sports" pagesize={pagesize} country={country} category="sports"/>} />
    <Route exact path="/business" element={ <News apiKey={apiKey} setProgress={setprogress} key="business" pagesize={pagesize} country={country}  category="business"/>} />
    <Route exact path="/entertainment" element={ <News apiKey={apiKey} setProgress={setprogress}key="entertainment" pagesize={pagesize} country={country}category="entertainment"/>} />
    <Route exact path="/technology" element={ <News apiKey={apiKey} setProgress={setprogress} key="technology" pagesize={pagesize} country={country}category="technology"/>} />
    <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setprogress} key="science" pagesize={pagesize} country={country}category="science"/>} />
  </Routes>
</Router>

     </div>
    )
  
}


