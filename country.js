let baseUrl = "https://disease.sh/v3/covid-19/countries/india?strict=true"
let totalCases = document.querySelector(".total-cases")
let activeCases = document.querySelector(".active-cases")
let recoveredCases = document.querySelector(".recovered-cases")
let deaths = document.querySelector(".deaths")
let criticalCases = document.querySelector(".critical-cases")

window.onload=()=>{
    fetch(baseUrl)
        .then((response)=>{
            getCountryResults(response.json())
        })
}

getCountryResults=(result)=>{
    Promise.resolve(result).then((val)=>{
        console.log("val", val)
        totalCases.innerHTML = val.cases
        activeCases.innerHTML = val.active
        recoveredCases.innerHTML = val.recovered
        deaths.innerHTML = val.deaths
        criticalCases.innerHTML = val.critical
    })
}