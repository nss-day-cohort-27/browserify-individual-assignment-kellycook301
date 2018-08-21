// Creating the actual form that pops up once data is passed into the form. 
// I wanted to generate what country you have been to, what city in that country, and what state or province in that state/country.
// Then since everything has an id, the delete button has the id attached to it so in the event that a
// post needs to be deleted, it makes the process easier.
// I wanted to try adding an edit feature, but I wanted to meet MVP and try bootstrap styling a bit.
// (EDIT) I might try it since we have time today after capstone presentations (8/21/18 8:55am)
// I will also admit that I was a little by adding the p tags to space things out when I could have styled them.
// OH WELL.

const createEvent = (country, city, state, id) => {
    return `
    <p></p>
    <div class="card">
    <h5 class="card-header">I Have Been To...</h5>
    <div class="card-body">
        <section>
        ${country}
         <p></p>
        </section>
        <section>
        ${city},
        <p></p>
        </section>
        <section>
        ${state}
        <p></p>
        </section>
        <button id="deleteEventButton--${id}" class="entry__delete">Delete Entry</button>  
    </div>
  </div>

    `
}

// exporting so other modules may use this one.
module.exports = createEvent
