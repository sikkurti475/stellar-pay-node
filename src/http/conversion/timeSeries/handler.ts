import logger from "../../../middleware/logger";
import { fetchTimeSeriesRates } from "./service";


export const timeSeriesHandler = async (req, res) => {
  logger.info("Request received for timeseries api");
  try {
    const { baseCurrency, targetCurrency, startDate, endDate } = req.query;
    const timeSeries = await fetchTimeSeriesRates(baseCurrency.toLowerCase(), targetCurrency.toLowerCase(), startDate, endDate);
    
    res.status(200).json({data: timeSeries});
  } catch (error) {
    logger.error("Error handling timeseries request", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
