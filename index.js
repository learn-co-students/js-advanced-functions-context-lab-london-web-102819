/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr) {
    return {firstName: arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []};
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord);
} 

function createTimeInEvent(date) {
    this.timeInEvents.push({date: date.split(" ")[0], hour: parseInt(date.split(" ")[1]), type: "TimeIn"});
    return this;
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push({date: date.split(" ")[0], hour: parseInt(date.split(" ")[1]), type: "TimeOut"});
    return this;
}

function hoursWorkedOnDate(date) {
    const start = this.timeInEvents.find(e => e.date === date).hour;
    const end = this.timeOutEvents.find(e => e.date === date).hour;
    return (end - start)/100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    const {payPerHour} = this;
    return payPerHour*hours;
}

function calculatePayroll(employees) {
    return employees.reduce((total, e) => total += allWagesFor.call(e), 0);
}

function findEmployeeByFirstName(employees, soughtName) {
    return employees.find(e => e.firstName === soughtName);
}

function allWagesFor() {
    return this.timeInEvents.reduce((total,current) => total += wagesEarnedOnDate.call(this, current.date), 0);
}