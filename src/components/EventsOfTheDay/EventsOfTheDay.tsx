import { getPortugueseEventsForToday } from "../../services/wikiData";

function  EventsOfTheDay(){
  const eventsToday:any[] = [];  
     getPortugueseEventsForToday()

    const listItems = eventsToday.map(event => <li>{event}</li>);
    
    return <>
            <ul>{listItems}</ul>
    </>
}

export default EventsOfTheDay;