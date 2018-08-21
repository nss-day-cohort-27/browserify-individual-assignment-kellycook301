const createPlace = require("./placesCreate")
const DataManager = require("./DataManager")
const $ = require("jquery")

// defining listPlaces
// Going into DataManager, into getAllEntries, and then using a ".then"
listPlaces = () => {
    DataManager.getAllEntries()
        .then(results => {
            // all of the entries are going to be attached to the item with the id of "placesList" in the html.
            $("#placesList").empty()
            results.forEach(place => {
                // because we are requiring "placesCreate" we can grab the country, city, state, and id.
                let placeComponent = createPlace(place.country, place.city, place.state, place.id)
                writeEntriesToDOM(placeComponent)
            })
        });
    }
    // writing your entries to the DOM. Thank goodness for descriptive names!
    // attaching them to the item with the id of "placesList" in the html.
    writeEntriesToDOM = (place) => {
        $("#placesList").append(place)
}
module.exports = listPlaces