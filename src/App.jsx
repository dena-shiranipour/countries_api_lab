import { useState } from 'react'
import './App.css'
import CountriesContainer from './containers/CountriesContainer'
import VisitedCountriesComponent from './components/VisitedCountriesComponent'

function App(){

  const [visitedCountries, setVisitedCountries]= useState;

 // const markedAsVisited = (country)

  return (
    <>
    <div>
      <h1>Countries Bucket List</h1>
        <CountriesContainer/>
     </div>

     <div> 
          <VisitedCountriesComponent/>
     </div> 
      
    </>
  )
}

export default App;
