// Require datejs at the top (outside the function)
require('datejs');

function combineUsers(...args) {
    // Step 2: Initialize return object
    const combinedObject = {
        users: []
    };

    // Step 3: Loop through args
    for (let array of args) {
        // Step 4: Merge arrays using spread operator
        combinedObject.users.push(...array);
    }

    // Step 5: Add today's date using DateJS
    combinedObject.merge_date = new Date().toString("M/d/yyyy");

    // Step 7: Return object
    return combinedObject;
}

// Example:
// combineUsers(["ali", "john"], ["mary"], ["sam", "tony"]);
// Expected:
// { users: ["ali","john","mary","sam","tony"], merge_date: "12/6/2025" }



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};