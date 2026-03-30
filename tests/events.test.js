import request from "supertest"
import {app} from "../server.js"



describe('GET /api/events', () => {
    it('should return events after creating one', async ()  => {
        
        await request(app).post("/api/events").send({
            away: "Fenerbahce",
            home: "Besiktas",
            sport: "Football",
            date: "2099-01-01",
            time: "12:00",
            venue: "Besiktas Vodafone Arena",
            description: "This is a Test event(JEST)"
        })

        const res = await request(app).get("/api/events") 
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("events");
        expect(Array.isArray(res.body.events)).toBe(true);
        expect(res.body.events.length).toBeGreaterThan(0);
    
    }); 
});


describe("POST /api/events", () => {

  it("should create a new event", async () => {
    const newEvent = {
            away: "Galatasaray",
            home: "Fenerbahce",
            sport: "Football",
            date: "2099-01-01",
            time: "12:00",
            venue: "Ali Sami Yen Stadium",
            description: "This is a Test event(JEST)"
    };

    const res = await request(app)
      .post("/api/events")
      .send(newEvent);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("event")
    expect(res.body.event).toHaveProperty("id");
    expect(res.body.event.home).toBe(newEvent.home)
    expect(res.body.event.away).toBe(newEvent.away);
    expect(res.body.event.date).toBe(newEvent.date);
  });

});
