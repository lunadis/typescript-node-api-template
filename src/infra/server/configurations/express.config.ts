import express, { Express } from "express";
import DatabaseConnectionInterface from "../../../contracts/database/DatabaseConnectionInterface";
import apiConfig from "../parameters/server.parameters";
import expressMiddlewaresConfig from "./expressMiddlewares.config";

export default async function (database: DatabaseConnectionInterface<any>) {
  const app: Express = express();
  expressMiddlewaresConfig(app);

  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    // const httpsServer = httpConfig(httpApi, api);
    // httpsServer.listen(apiConfig.ssl_port, () => {
    //   console.log("Server its up and running on port: " + apiConfig.port);
    // });
  } else {
    app.listen(apiConfig.port, function () {
      console.log("Server up and running on port " + apiConfig.port);
    });
  }

  return app;
}
