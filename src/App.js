import React from 'react'
import NavBar from './Compoents/NavBar/NavBar'
import './App.css';
import Banner from './Compoents/Banner/Banner';
import RowPost from './Compoents/RowPost/RowPost';
import {action,originals,comedy,horror,documentaries,romance} from './Urls';
function App() {
  return (
    <div> 
      
      <NavBar/> 
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'  />
      <RowPost url={action} title='Action' isSmall={true} />
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default App
