function createEmployeeRecord([firstName, familyName, title, payRate]) {
    let recordInput = [firstName, familyName, title, payRate]
    const newEngineers = map(recordInput, function(element) {
        return Object.assign({}, element, { "first name: "`$firstName`, "family name: " `$familyName` });
      });

    }

}
