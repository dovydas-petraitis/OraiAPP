const ajaxService = (city)=> {
    const url = "https://api.meteo.lt/v1/places/"
    return fetch(`${city}/forecasts/long-term`)
    .then(response=>response.json())

}

export default ajaxService