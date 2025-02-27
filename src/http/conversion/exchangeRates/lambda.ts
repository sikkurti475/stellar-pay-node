import awsServerlessExpress from "aws-serverless-express";
import app from "../../../index";

// Convert Express app into a server
const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
