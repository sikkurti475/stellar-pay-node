import logger from "../../../middleware/logger";
import { convert } from "./service";

export const convertCurrency = async (req, res) => {
    
    logger.info("Request received for convertCurrency api");
    try {
        const { base, amount, targets } = req.query;

        const targetCurrencies = targets.split(',');
        const convertedAmounts = await convert(base.toLowerCase(), amount, targetCurrencies);
        res.status(200).json({data: convertedAmounts});
    } catch (error) {
        logger.error("Error handling convertCurrency api request", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};