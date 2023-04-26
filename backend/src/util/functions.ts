export function convertDataForDefault(date) {
    const dateInput = new Date(String(date));
    const dateString = dateInput.toISOString();
    const dateArray = dateString.split("T");
    const elArray = dateArray[0].split("-");
    const arrayDay = [elArray[2]];
    const arrayMonth = [elArray[1]];
    const arrayYear = [elArray[0]];
    const newArray = [arrayDay[0], arrayMonth[0], arrayYear[0]];
    const string = newArray.join("/");

    return string;
}

export function convertDataForDB(date) {
    const arrayData = date.split('/');
    const dateFormat = `${arrayData[2]}-${arrayData[1].padStart(2, '0')}-${arrayData[0].padStart(2, '0')}`;
    return dateFormat;
}
