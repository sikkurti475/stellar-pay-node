import { fetchExchangeRates } from "../exchangeRates/service";

export const fetchTimeSeriesRates = async (baseCurrency: string, targetCurrency: string, startDate: string, endDate: string) => {
    const timeSeries = {};
    const start = new Date(startDate);
    const end = new Date(endDate);

    while (start <= end) {
        const date = start.toISOString().split('T')[0];
        const rates = await fetchExchangeRates(baseCurrency, date);
        if (rates && rates[targetCurrency]) {
            timeSeries[date] = rates[targetCurrency];
        }
        start.setDate(start.getDate() + 1);
    }

    return timeSeries;
}