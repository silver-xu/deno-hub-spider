import { Application } from "../../deps.ts";
import { applyRoutes } from "./routes.ts";

export const createServer = () => {
  const app = new Application();
  applyRoutes(app).start({ port: 8080 });
};
