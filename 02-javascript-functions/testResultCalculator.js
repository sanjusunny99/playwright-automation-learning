function testResult(passed, failed) {
    const total = passed + failed;
    const passPercentage = (passed / total) * 100;

    console.log("Total Tests:", total);
    console.log("Passed Tests:", passed);
    console.log("Failed Tests:", failed);
    console.log("Pass Percentage:", passPercentage + "%");

    if (passPercentage >= 90) {
        console.log("Status: Excellent");
    } else if (passPercentage >= 70) {
        console.log("Status: Good");
    } else {
        console.log("Status: Needs Improvement");
    }
}

testResult(92, 8);