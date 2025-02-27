import logger from "../../../middleware/logger";
import { fetchExchangeRates, fetchSelectedExchangeRates } from "./service";

export const exchangeRatesHandler = async (req, res) => {
    
    logger.info("Request received for exchange rates api");
    try {
        const { baseCurrency, date = 'latest', currencies } = req.query;

        if (currencies === undefined || currencies.length === 0){
            const response = await fetchExchangeRates(baseCurrency.toLowerCase(), date)
            res.status(200).json({data: response});
        }
        const currencyList = currencies.split(',');
        const response= await fetchSelectedExchangeRates(baseCurrency.toLowerCase(), date, currencyList);
        logger.info("response", response);
        res.status(200).json({data: response});
    } catch (error) {
        logger.error("Error handling exchange rates request", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};