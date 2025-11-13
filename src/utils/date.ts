export const dayDifference = (firstDate:Date,secondDate:Date) =>{
    console.log(firstDate.getTime());
    console.log(secondDate.getTime());
    console.log((firstDate.getTime()-secondDate.getTime()))
    return Math.ceil((firstDate.getTime()-secondDate.getTime())/(1000*60*60*24))
};