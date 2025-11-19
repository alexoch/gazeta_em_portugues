/**
 * Fetch events for today's date from Portuguese Wikipedia
 * and filter using Wikidata.
 */
export async function getPortugueseEventsForToday(): Promise<Record<string, any>> {
  const now = new Date();
  const locale = "pt-PT";

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const formattedDate = now.toLocaleDateString(locale, options).replaceAll(" ", "_")

  const url = `https://pt.wikipedia.org/w/api.php?action=parse&page=${formattedDate}&prop=text&format=json&origin=*`;

  const res = await fetch(url, {
    headers: { "User-Agent": "GazetaEmPortugues/1.0" }
  });

  if (!res.ok) {
    throw new Error(`Wikipedia API error: ${res.status}`);
  }

  const data = await res.json();
  let result:any[] = [];
  fullTree(data.parse.text["*"],result)
  console.log("Parsed data:",result );


  return data;
}



function fullTree(html: string,result:any[]) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  walk(doc.body, result);
}

function walk(node: any, result: any[]): any {
  if (node.nodeType == Node.ELEMENT_NODE && node.tagName.toLowerCase() == "table") {
    return null;
  }

  if (node.nodeType == Node.TEXT_NODE) {
    const textVal = node.textContent.trim();

    if (textVal.includes("português") || textVal.includes("Portugal")) {
      console.log(textVal)
      let final:any = "";
      if (node.parentNode.tagName == "LI") {
        if (node.parentNode.parentNode.tagName == "LI") {
          
          // final = node.parentNode.parentNode;
                  final = node.parentNode.parentNode.innerText?.slice(0,4)+" "+ textVal;

        } else {
          final = node.parentNode.parentNode.parentNode.innerText?.slice(0,4)+" "+ textVal;
        }
      } else {
        final = node.parentNode.innerText?.slice(0,4)+" "+ textVal;
        
      }
      // console.log(final.innerText.slice(0,4));

      result.push(final);
    }

  }


  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      return {
        type: "element",
        tag: node.tagName.toLowerCase(),
        attrs: Object.fromEntries([...node.attributes].map(a => [a.name, a.value])),
        children: [...node.childNodes].map(function (x) { return walk(x, result) }).filter(Boolean)
      };
    case Node.TEXT_NODE:
      const t = node.textContent.trim();
      return t ? { type: "text", text: t } : null;
    case Node.COMMENT_NODE:
      return null;
    default:
      return null;
  }
}

