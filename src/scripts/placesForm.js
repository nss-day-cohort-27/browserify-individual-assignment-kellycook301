const $ = require("jquery")

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#countryName").val("")
            $("#cityName").val("")
            $("#stateName").val("")
        }
    },
    renderEntryForm: {
        value: () => {
            return `
            <div class="travelForm">
            <h5 class="card-header">Where The Hell Have You Been?</h5>
                <div class="card-body">
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


module.exports = FormManager