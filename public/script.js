

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


const openBtn = document.getElementById("open-form-btn");
const closeBtn = document.getElementById("close-form-btn");
const formContainer = document.getElementById("form-container");

openBtn.addEventListener("click", () => {
  formContainer.classList.toggle("active");
});


closeBtn.addEventListener("click", () => {
  formContainer.classList.remove("active");
});


const form = document.getElementById("event-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const eventData = {
    sport: document.getElementById("sport").value,
    home: document.getElementById("home").value,
    away: document.getElementById("away").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    venue: document.getElementById("venue").value,
    description: document.getElementById("description").value,
  };

  await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  form.reset();
  formContainer.classList.remove("active");

  // refetch events after adding a new one
  fetchEvents();
});

