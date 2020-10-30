let fldata;

const $fdata = $('#fdata')

$('form').on('submit', getData)

function getData(event) {
    event.preventDefault()

    const searchText = $('#search').val()

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/GBP/en-GB/?query=${searchText}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "f0cc8416c4msh5530ba8e037b0fdp136667jsn733a2b51f625"
        }
    }

    const data = $.ajax(settings).then(
        (data) => {
            console.log(data)
            flight = data
            render()
        },
        (error) => {
            console.log("bad request: ", error)
        }
    )
}

function render() {
    const dataArray = flight.Places.map(aport => {
        return `
        <article class="card">
        <h2>Airport: ${aport.PlaceName}</h2>
        <p><strong>Country ID:</strong> ${aport.CountryId}</p>
        <p><strong>Country:</strong> ${aport.CountryName}</p>
        <p><strong>Place ID:</strong> ${aport.PlaceId}</p>
        <p><strong>Initials:</strong> ${aport.RegionId}</p>
        </article>`
    })
    $fdata.html(dataArray)

}