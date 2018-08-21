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

module.exports = createEvent
