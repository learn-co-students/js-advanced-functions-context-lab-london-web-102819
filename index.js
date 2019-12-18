/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let event = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return event
}

function createEmployeeRecords(array) {
   let records = array.map(function(e) {
    return createEmployeeRecord(e)
   })
   return records
}

const createTimeInEvent = function(stamp) {

    let event = {
        type: "TimeIn",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],
    }

    this.timeInEvents.push(event)
    return this
}

const createTimeOutEvent = function(stamp) {

    let event = {
        type: "TimeOut",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],
    }

    this.timeOutEvents.push(event)
    return this
}

const hoursWorkedOnDate = function(date) {
        
    let startEvent = this.timeInEvents.find(function(e) {
        return e.date === date
    })

    let endEvent = this.timeOutEvents.find(function(e) {
        return e.date === date
    })

    return (endEvent.hour - startEvent.hour) / 100
}

const wagesEarnedOnDate = function(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

const findEmployeeByFirstName = function(array, firstName) {
    let employee = array.find(function(e) {
        return e.firstName === firstName
    })

    return employee
}

const calculatePayroll = function(array) {
    let payroll = array.reduce(function(total, e) {
        return total + allWagesFor.call(e)
    }, 0)

    return payroll
}