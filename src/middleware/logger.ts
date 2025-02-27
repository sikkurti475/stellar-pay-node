import log4js from "log4js";

log4js.configure({
  appenders: { console: { type: "console" } },
  categories: { default: { appenders: ["console"], level: "info" } },
});

const logger = log4js.getLogger("stellar-pay-svc");

logger.info("Logger initialized for AWS Lambda");

export default logger;
