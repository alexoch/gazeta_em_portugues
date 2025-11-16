// getPortugueseEventsWikidata.ts



/**
 * Query Wikidata to check if an item is related to Portugal.
 * Returns true if:
 * - Country = Portugal (P17 = Q45)
 * - Located in Portugal (P131 contains Q45)
 * - Inception/Origin in Portugal (P495, P1532)
 */
async function isPortugueseWikidataItem(qid: string): Promise<boolean> {
  const sparql = `
    SELECT ?item WHERE {
      VALUES ?item { wd:${qid} }

      {
        ?item wdt:P17 wd:Q45.       # country is Portugal
      }
      UNION {
        ?item wdt:P131 wd:Q45.      # located in Portugal
      }
      UNION {
        ?item wdt:P495 wd:Q45.      # origin / country of manufacture
      }
      UNION {
        ?item wdt:P1532 wd:Q45.     # country for the event
      }
    }
  `;

  const url = "https://query.wikidata.org/sparql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/sparql-query",
      "User-Agent": "YourApp/1.0"
    },
    body: sparql
  });

  const json = await res.json();

  return json.results.bindings.length > 0;
}

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


