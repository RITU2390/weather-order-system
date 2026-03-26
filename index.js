require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const API_KEY = process.env.API_KEY;
// console.log("API KEY:", API_KEY);
// console.log("LENGTH:", API_KEY ? API_KEY.length : "undefined");
// Read orders
const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));

// Fetch weather
async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    const weather = res.data.weather[0].main;
    console.log(`Weather in ${city}: ${weather}`);
    return weather;
  } catch (error) {
    console.error(`❌ Error for city: ${city}`);
    
    if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Message:", error.response.data);
    } else {
        console.error(error.message);
    }

    return null;
}
}
// AI-style apology message
function generateApology(customer, city, weather) {
  return `Hi ${customer}, we sincerely apologize. Due to ${weather} conditions in ${city}, your order has been delayed. We truly appreciate your patience and understanding.`;
}

// Main processing function
async function processOrders() {
  console.log("🚀 Processing orders...\n");

  const promises = orders.map(async (order) => {
    const weather = await getWeather(order.city);

    if (!weather) {
      order.status = "Error";
      return order;
    }

    if (["Rain", "Snow", "Extreme"].includes(weather)) {
      order.status = "Delayed";
      order.message = generateApology(order.customer, order.city, weather);
    } else {
      order.status = "On Time";
    }

    return order;
  });

  const updatedOrders = await Promise.all(promises);

  fs.writeFileSync("orders.json", JSON.stringify(updatedOrders, null, 2));

  // console.log("\n✅ Orders processed successfully!");
}

processOrders();
