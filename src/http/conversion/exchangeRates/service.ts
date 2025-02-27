import { log } from "console";
import { API_BASE_URL } from "../../../constants"
import logger from "../../../middleware/logger";

export const fetchExchangeRates = async (baseCurrency: string, date: string) => {
    const apiUrl = API_BASE_URL + date + "/v1/currencies/" + baseCurrency + ".json";
    logger.info("fetching exchange rates from " + apiUrl + "...");
    const apiResponse = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
    });
    if (!apiResponse.ok) {
        throw new Error(`Failed to fetch exchange rates: ${apiResponse.statusText}`);
    }
    const apiResult = await apiResponse.json();
    return apiResult ? apiResult[baseCurrency] : undefined ;
}

export const fetchSelectedExchangeRates = async (baseCurrency: string, date: string, targetCurrencies: string[]) => {
    const allRates = await fetchExchangeRates(baseCurrency, date);
    logger.info("fetched all exchange rates", allRates);
    const selectedRates = {};
    targetCurrencies.forEach(currency => {
        logger.info(`rate for ${currency} is ${allRates[currency]}`);
        selectedRates[currency] = allRates[currency] ? allRates[currency] : null;
    })
    logger.info("selected exchange rates", selectedRates);
    return selectedRates;
}