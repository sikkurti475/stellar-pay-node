import express from "express";
import { exchangeRatesHandler } from "../http/conversion/exchangeRates/handler";
import { authenticate } from "../middleware/authenticate";
import { timeSeriesHandler } from "../http/conversion/timeSeries/handler";
import { convertCurrency } from "../http/conversion/convertCurrency/handler";

const router = express.Router();

router.get("/convert", authenticate, convertCurrency);
router.get("/exchange-rates", authenticate, exchangeRatesHandler);
router.get("/timeseries", authenticate, timeSeriesHandler);
export default router;
