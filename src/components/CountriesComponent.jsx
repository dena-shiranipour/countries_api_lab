const CountriesComponent = ({countriesData}) => { 

    return(
        <p>{countriesData.map((country, index)=> (
            <div key={index}>
                <p>{country.name.common}</p>
            </div>
        ) )}
        
        </p>
    )
}
export default CountriesComponent; 