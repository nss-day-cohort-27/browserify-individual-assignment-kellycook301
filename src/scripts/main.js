const FormManager = require("./placesForm")
const DataManager = require("./DataManager")
const listPlaces = require("./placesList")

const $ = require("jquery")

$("#placesForm").html(FormManager.renderEntryForm())
const listEntries = () => {
    DataManager.getAllEntries()
        .then(allEntries => listPlaces(allEntries))
}

listEntries()

$("#placesList").click(evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteEntry(id).then(() => {
            $("#placesList").empty()
            listEntries()
        })
    }
})

$("#placesForm").on("click", "#saveEntryButton", event => {
    const newEntry = {
        country: $("#countryName").val(),
        city: $("#cityName").val(),
        state: $("#stateName").val(),
    }

    DataManager.saveEntry(newEntry).then(() => {
        FormManager.clearForm()
        $("#placesList").html("")
        listEntries()
    })
})