

async function fetchEvents(){
    try{
     const res = await fetch("http://localhost:3000/api/events")
     const data = await res.json();

     console.log(data)
     
     renderEvents(data.events)
    }
    catch(err){
        console.error(`"Error fetching events": ${err}`)
    }
}

function renderEvents(events){
    const container = document.getElementById("events-container")

    container.innerHTML = "";

    events.forEach(event => {
        const div = document.createElement("div")

        div.innerHTML = `
        <div class="event-card">
        <h3>${event.sport}</h3>
        <p class="teams">${event.home} vs ${event.away}</p>
        <p class="datetime">${event.date} - ${event.time}</p>
        <p class="venue">${event.venue || "No venue"}</p>
        <p class="description">${event.description || ""} </p>
        </div>
        `

        container.appendChild(div);
    })

}

fetchEvents();