import logger from "../../../middleware/logger";
import { fetchExchangeRates } from "../exchangeRates/service";

export const convert = async (base: string, amount: number, targets: string[]) => {
    const rates = await fetchExchangeRates(base, "latest");
    logger.info(`rates fetched`)
    if (!rates) {
        throw new Error(`Failed to fetch exchange rates: ${rates}`);
    }
    const convertedAmounts = {};
    targets.forEach(target => {
        const rate = rates[target.toLowerCase()];
        logger.info(`converting ${base} to ${target} with rate ${rate}`);
        if (rate) {
            convertedAmounts[target.toUpperCase()] = amount * rate;
        } else {
            convertedAmounts[target.toUpperCase()] = 0.0;
        }
    });
    return convertedAmounts;
}