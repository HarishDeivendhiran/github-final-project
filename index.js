
function calculateSimpleInterest(principal, rate, time) {
    if (principal < 0 || rate < 0 || time < 0) {
        throw new Error("Values cannot be negative");
    }

    return (principal * rate * time) / 100;
}

module.exports = calculateSimpleInterest;

if (require.main === module) {
    const interest = calculateSimpleInterest(10000, 5, 2);
    console.log("Simple Interest:", interest);
    console.log("SERVICERUNNING");
    console.log("Server running on port 8000");
}
