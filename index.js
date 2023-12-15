import express from "express";
import { SERVER_PORT, MODE } from "./config/config.js";
import router from "./routes/router.js"
import connection from "./connection/connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router)


if (MODE === "sql") {
  await connection.sync({ force: true });
}



app.listen(SERVER_PORT, () => {
  console.log(`Server corriendo en el puerto ${SERVER_PORT}`);
});
