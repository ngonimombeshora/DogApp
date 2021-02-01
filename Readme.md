# How to run

## 1. Install mongoDB

    [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

## 2. Start mongoDB

`sudo systemctl start mongod`

## 3. Run application in desired environment

`npm i`
`npm run start:<env>`
where `<env>` = dev/prod/test/test-watch

## 4. Run tests

`npm run test`

### Dependancies:version

<!-- for env config -->

"dotenv": "^8.2.0",

"express": "^4.17.1",

<!-- for performing entry validations -->

"express-validator": "^6.9.2",

<!-- for caching -->

"memory-cache": "^0.2.0",

<!-- MongoDB access -->

"mongoose": "^5.11.13"

<!-- For unit tests -->

"jest": "^26.6.3"

<!-- For "hot-reload" -->

nodemon

<!--  -->

"babel-jest": "^26.6.3",
"babel-node": "0.0.1-security",
