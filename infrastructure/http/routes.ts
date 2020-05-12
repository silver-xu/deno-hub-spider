import { Application } from "../../deps.ts";
import { getRepoController } from "./controllers/getRepoController.ts";
import { searchRepoController } from "./controllers/searchRepoController.ts";

export const applyRoutes = (app: Application): Application =>
  app
    .get("/api/repos/:keyword", (context) => searchRepoController(context))
    .get("/api/repo/:key", (context) => getRepoController(context));
