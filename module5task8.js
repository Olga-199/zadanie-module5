let vegetables = new Map([
    ["cucumber", "green"],
    ["tomato", "red"],
    ["pumpkin",    "orange"]
]);
for (const [key, value] of vegetables) {
    console.log(`${key} = ${value}`);
}