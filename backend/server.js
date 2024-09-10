import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))

// Set up a timer to call the API every 12 minutes
const apiCallInterval = 12 * 60 * 1000; // 12 minutes in milliseconds

function makeApiCall() {
  axios.get("https://nextcartserver-it17.onrender.com/api/admin/products/all")
    .then(response => {
      console.log("API call successful");
    })
    .catch(error => {
      console.error("Error making API call:", error.message);
    });
}

// Initial API call
makeApiCall();

// Set up the interval to make API calls every 12 minutes
const apiCallTimer = setInterval(makeApiCall, apiCallInterval);
//Global error middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "An error occurred"});
  next()
});