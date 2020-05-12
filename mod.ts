import { createServer } from "./infrastructure/http/server.ts";

(async () => {
  createServer();
  console.log("🚀 http://localhost:8080/");
})();
