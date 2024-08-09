const Country = ({country, handleCountryUpdate}) => {

    const handleButtonClick = () => {
        handleCountryUpdate(country);
    }

    return(
        <div>
            <p>{country.name.common}</p>
            <button onClick={handleButtonClick}>Visit Country</button>
        </div>
    )

}

export default Country;