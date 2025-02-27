# stellar-pay-node
Node backend for stellarpay 

# Steps to build and launch the api locally 

    1. npm i
    2. npm run build
    3. npm run start

    You should be able to see the api start and give out endpoints to test in postman

# sample curls for postman teting


curl --location 'http://localhost:3000/dev/conversion/timeseries?baseCurrency=usd&startDate=2025-02-21&endDate=2025-02-24&targetCurrency=inr' \
--header 'Authorization: valid-token'

curl --location 'http://localhost:3000/dev/conversion/convert?base=usd&amount=100&targets=eur%2Cgbp%2Ccad%2Cxaf' \
--header 'Authorization: valid-token'

curl --location 'http://localhost:3000/dev/conversion/exchange-rates?baseCurrency=usd&date=2025-02-21&currencies=eur%2Cgbp%2Ccad%2Cxaf%2Ckdj' \
--header 'Authorization: valid-token'