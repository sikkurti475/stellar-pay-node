import express from "express";
import currencyConverterRoutes from "./routes/currencyConverter";
import { authenticate } from "./middleware/authenticate";
import logger from "./middleware/logger";

const app = express();

// Log each request
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.path}`);
  next();
});

app.use(authenticate);


app.use("/conversion", currencyConverterRoutes);
// Global error handler
app.use((err: Error, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;