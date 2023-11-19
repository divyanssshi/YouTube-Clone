import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage";
import VideoPage from "./components/VideoPage";
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/videos" element={<VideoPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
