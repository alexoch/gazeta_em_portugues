import { toFirstCapitalLetter } from "../../utils/string";

function TextDate(){
    // TODO missing styling
    const currentDate = new Date();
    const locale = "pt-PT";
    const options : Intl.DateTimeFormatOptions  = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return <>
        <div>
            {toFirstCapitalLetter(currentDate.toLocaleDateString(locale,options))}
        </div>
    </>
}

export default TextDate;