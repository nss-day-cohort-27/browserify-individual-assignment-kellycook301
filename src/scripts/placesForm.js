const $ = require("jquery")

// For creating the entry form.
// Clearing out the form once info has been entered. Clearing out data being passed into the id's.
// The "val("")" clears it out because it is an empty string.
const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#countryName").val("")
            $("#cityName").val("")
            $("#stateName").val("")
        }
    },
    // Rendering html. Created a form to hold some dang ole info.
    // I used Bootsrrap because I thought it would be fun to try and incorporate it into this project so things
    // looked a little nicer and more organized.
    renderEntryForm: {
        value: () => {
            return `
        <div class="travelForm">
            <h5 class="card-header bg-secondary">Where The Hell Have You Been?</h5>
            <div class="card-body bg-white">
            <label for="countryName">Country:</label>
            <input type="text" class="form-control" id="countryName" aria-describedby="emailHelp" placeholder="Country">
            <label for="cityName">City:</label>
            <input type="text" class="form-control" id="cityName" placeholder="City">
            <label for="stateName">State/Province:</label>
            <input type="text" class="form-control" id="stateName" placeholder="State/Province">
            <p></p>
            <button id="saveEntryButton" class="placeInput placeInput__save">Submit Entry</button>  
            </div>
        </div>
            `
        }
    }

})

// Exporting so other modules may use the info with this module.
module.exports = FormManager