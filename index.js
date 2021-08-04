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
    let dateAndTime =dateStamp.split(" ")
    return Object.assign(record.timeInEvents, {type: "TimeIn", hour: `$dateStamp.charAt(11,12)`, date: dateAndTime[0]})

}