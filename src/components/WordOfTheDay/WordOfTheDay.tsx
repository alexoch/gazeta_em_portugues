import data_11_14 from "../../assets/datasource/wordOfTheDay/11_14.json"
function WordOfTheDay(){
    return <>
        <div> {data_11_14.image}  </div>
        <div>{data_11_14.word}</div>
    </>
}

export default WordOfTheDay;