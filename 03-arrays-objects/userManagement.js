const users = [
    {
        username: "admin",
        role: "Admin",
        active: true
    },
    {
        username: "john",
        role: "User",
        active: false
    },
    {
        username: "sarah",
        role: "Manager",
        active: true
    },
    {
        username: "david",
        role: "Tester",
        active: false
    },
    {
        username: "sanju",
        role: "Developer",
        active: true
    },
    {
        username: "mike",
        role: "Designer",
        active: false
    }
];

console.log("Total Users:", users.length);

console.log("\nAll Users:");

for (const user of users) {
    console.log(user.username);
}

console.log("\nActive Users:");

for (const user of users) {

    if (user.active === true) {
        console.log(user.username + " - " + user.role);
    }

}

console.log("\nInactive Users:");

for (const user of users) {

    if (user.active === false) {
        console.log(user.username + " - " + user.role);
    }

}