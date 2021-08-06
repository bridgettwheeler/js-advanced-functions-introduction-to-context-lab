function createEmployeeRecord(record) {
    
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []

    }

}
function createEmployeeRecords(records) {
    return records.map(record => createEmployeeRecord(record))
}
function createTimeInEvent(record, dateStamp) {
    let dateAndTime = dateStamp.split(' ')
    console.log(dateAndTime)
    record.timeInEvents.push({type: "TimeIn", hour: parseInt(dateAndTime[1]), date: dateAndTime[0]})
    return record
}
function createTimeOutEvent(record, dateStamp) {
    let dateAndTime = dateStamp.split(' ')
    record.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateAndTime[1]), date: dateAndTime[0]})
    return record
}
//find a record who's date is equal to date in argument. Go in the object that has the key value pair tyoe:TimeOut 
//and subtract it from the object that has the key value pair type: timeIn

function hoursWorkedOnDate(record, date) {
    const timeIn = record.timeInEvents.filter(event => event.date === date)
    const timeOut = record.timeOutEvents.filter(event => event.date === date)
    return (timeOut[0].hour - timeIn[0].hour)/100
}
function wagesEarnedOnDate(record, date) {
    return hoursWorkedOnDate(record, date) * record.payPerHour
}
function allWagesFor(record) {
    const arrayOfDates = record.timeInEvents.map(event => event.date)
    return arrayOfDates.reduce((accumulator, currentValue) => {
        return accumulator + wagesEarnedOnDate(record, currentValue)
    }, 0)
}
function findEmployeeByFirstName(srcArray, firstName) {
    var nameMatch = srcArray.filter(record => record.firstName === firstName)
    return nameMatch[0]
}
//map through each record in this array and run allWagesFor function on each record.
//then with the array that is returned use reduce to get sum
function calculatePayroll(recordsArray) {
    var arrayOfWages = recordsArray.map(record => allWagesFor(record))
    console.log("Bridgett this is arrayOfWages:", arrayOfWages)
    return arrayOfWages.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

}