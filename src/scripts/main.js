const FormManager = require("./placesForm")
const DataManager = require("./DataManager")
const listPlaces = require("./placesList")

// requiring jQuery because I love it. It SPEAKS to me.
const $ = require("jquery")

// rendering the entry form by rendering the entry form to the id "placesForm"
// Going into the DataManager, into "getAllEntries"
// Invoking the "listPlaces" function from placesList.js
$("#placesForm").html(FormManager.renderEntryForm())
const listEntries = () => {
    DataManager.getAllEntries()
        .then(allEntries => listPlaces(allEntries))
}

// listing entries made
listEntries()

// event listener for when you click on the "delete entry" button. In "placesCreate.js" there are id's attached
// to each entry. So when you click on "delete" it is removing it from the database.
// Targetting items in the "placesList" div. Then after the item has been deleted you are invoking the function
// "listEntries" to list all the other ones.
$("#placesList").click(evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deleteEntry(id).then(() => {
            $("#placesList").empty()
            listEntries()
        })
    }
})

// event listener for when you click on the "submit entry" button. Creating a new entry and passing in data to each 
// targetted id. In this case, countryName, cityName, and stateName.
$("#placesForm").on("click", "#saveEntryButton", event => {
    const newEntry = {
        country: $("#countryName").val(),
        city: $("#cityName").val(),
        state: $("#stateName").val(),
    }
// Clearing out the form and listing all entries. Invoking "listEntries".
    DataManager.saveEntry(newEntry).then(() => {
        FormManager.clearForm()
        $("#placesList").html("")
        listEntries()
    })
})
