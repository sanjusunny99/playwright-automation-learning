const testCases = [
    {
        name: "Login Test",
        status: "Passed"
    },
    {
        name: "Checkout Test",
        status: "Failed"
    },
    {
        name: "Search Test",
        status: "Passed"
    },
    {
        name: "Logout Test",
        status: "Passed"
    }
];

console.log("Total Test Cases:", testCases.length);

for (const testCase of testCases) {

    if (testCase.status === "Passed") {
        console.log("PASS:", testCase.name);
    } else {
        console.log("FAIL:", testCase.name);
    }

}