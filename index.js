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

let createEmployeeRecords = createEmployeeRecord.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj