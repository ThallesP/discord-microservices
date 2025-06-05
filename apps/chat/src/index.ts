import { Elysia } from "elysia";
import { node } from "@elysiajs/node";

const app = new Elysia({ adapter: node() }).get("/health", () => "OK");

app.listen(3000);

console.log("🦊 Elysia is running on 3000");