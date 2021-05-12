const messages = [
    "David",
    "Ana",
    "Oscar",
    "Alba",
    "Felipe"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };