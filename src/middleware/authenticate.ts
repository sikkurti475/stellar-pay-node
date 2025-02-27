import logger from "./logger";

export const authenticate = (req, res, next) => {
  try {
    logger.info("Authenticating request");
    const token = req.headers.authorization;
    logger.info("Token: ", token);
    if (token === "valid-token") {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
