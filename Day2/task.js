const day = prompt("Enter any weekday name: ");

switch (day) {
    case "monday": case "tuesday" :
        console.log("football");
        break;
    case "wednesday" : case "thrusday" :
        console.log("cricket");
        break;
    case "friday":
        console.log("volleyball");
        break;
    case "saturday":
        console.log("throwball");
        break;
    case "sunday":
        console.log("holiday");
        break;
    default:
        console.log("Invalid Input");
}
