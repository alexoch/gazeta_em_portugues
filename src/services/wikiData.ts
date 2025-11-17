/**
 * Fetch events for today's date from Portuguese Wikipedia
 * and filter using Wikidata.
 */
export async function getPortugueseEventsForToday(): Promise<Record<string,any>> {
  const now = new Date();
  const locale = "pt-PT";

const options : Intl.DateTimeFormatOptions  = {
        month: "long",
        day: "numeric",
    };


  const formattedDate = now.toLocaleDateString(locale,options).replaceAll(" ","_")

  const url = `https://pt.wikipedia.org/w/api.php?action=parse&page=${formattedDate}&prop=text&format=json&origin=*`;

  const res = await fetch(url, {
    headers: { "User-Agent": "GazetaEmPortugues/1.0" }
  });

  if (!res.ok) {
    throw new Error(`Wikipedia API error: ${res.status}`);
  }


  
  return res;
}


