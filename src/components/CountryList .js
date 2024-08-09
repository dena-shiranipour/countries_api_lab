import Country from "./Country";

const CountryList = ({listOfCountries, handleCountryUpdate}) => {

    const mappedCountries = listOfCountries.map(country => {
        return <Country 
                    country={country} 
                    handleCountryUpdate={handleCountryUpdate}
                    key={country.cca3}
                />
    })

    return(
        <section>
            {mappedCountries}
        </section>
    )

}

export default CountryList;