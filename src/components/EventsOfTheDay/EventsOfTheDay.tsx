import { getPortugueseEventsForToday } from "../../services/wikiData";

function  EventsOfTheDay(){
  const eventsToday:any[] = [];  
     getPortugueseEventsForToday().then((msg=>msg.json())).then((data:any) => {
    console.log("Parsed data:", data);

    // HTML content is here:
    const html = data.parse.text["*"];

    console.log("HTML:", html);
  });

    const listItems = eventsToday.map(event => <li>{event}</li>);
    
    return <>
            <ul>{listItems}</ul>
    </>
}

export default EventsOfTheDay;