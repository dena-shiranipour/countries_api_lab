import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countriesToVisit, setCountriesToVisit] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountriesToVisit(data);
    }

    const markCountryAsVisited = (country) => {
        const updatedCountriesToVisit = [...countriesToVisit];
        const updatedVisitedCountries = [...visitedCountries];

        // find country in updatedCountriesToVisit
        const countryLocation = updatedCountriesToVisit.indexOf(country);

        if (countryLocation === -1) {
            return
        }
        // remove it
        updatedCountriesToVisit.splice(countryLocation, 1);
        // add it to updatedVisitedCountries
        updatedVisitedCountries.push(country);

        setCountriesToVisit(updatedCountriesToVisit);
        setVisitedCountries(updatedVisitedCountries);
    }

    useEffect(() => {
        loadCountryData();
    },[])

    return(
        <>
            <h1>Country Bucket List</h1>
            <h2>All Countries</h2>
            <CountryList 
                listOfCountries={countriesToVisit} 
                handleCountryUpdate={markCountryAsVisited}
            />
            <h2>Visited Countries</h2>
            <CountryList
                listOfCountries={visitedCountries}
                handleCountryUpdate={markCountryAsVisited}
            />
        </>
    )

}

export default CountryContainer;