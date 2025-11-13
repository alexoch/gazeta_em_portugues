import { dayDifference } from "../../utils/date";
import pkg from "../../../package.json";
function Edition(){
    const firstEdition = new Date(2025,11,13); 
    const currentEdition = dayDifference(new Date(),firstEdition); // TODO  wrong day diff  
    const version = pkg.version;
    return <>
        <div>
            <div>{currentEdition} Edicao</div>
            <div>{version} versão</div>
        </div>
    </>
}

export default Edition;