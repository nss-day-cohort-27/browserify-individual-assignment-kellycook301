const createPlace = require("./placesCreate")
const DataManager = require("./DataManager")
const $ = require("jquery")

listPlaces = () => {
    DataManager.getAllEntries()
        .then(results => {
            $("#placesList").empty()
            results.forEach(place => {
                let placeComponent = createPlace(place.country, place.city, place.state, place.id)
                writeArticlesToDOM(placeComponent)
            })
        });
    }
    writeArticlesToDOM = (place) => {
        $("#placesList").append(place)
}
module.exports = listPlaces