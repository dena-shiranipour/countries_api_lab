import { useState, useEffect } from "react";
import CountriesComponent from "../components/CountriesComponent";

const CountriesContainer = ({markedAsVisited}) => {
    const [countriesData, setCountriesData] = useState(null);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountriesData(data);
    }

    useEffect(() => {
        fetchCountries()
    }, []);


    return(
        <>
             <h1>Countries:</h1>
            {countriesData.length > 0 ? (
            <CountriesComponent countriesData={countriesData} markedAsVisited={markedAsVisited}/> 
            ):( <p>loading data...</p>
            )}
            
        </>
    );
}

export default CountriesContainer;