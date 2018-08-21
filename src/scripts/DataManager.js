// All the fun fetch stuff!
// You can save an entry, get all the entries created, and delete an entry. I am assuming that "editEntry" would
// go here if I wanted ti implement that at some stage.

const APIManager = Object.create(null, {
    saveEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllEntries: {
        value: () => {
            return fetch("http://localhost:8088/places").then(r => r.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/places/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager