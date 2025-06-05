import { Elysia, t } from "elysia";
import { node } from "@elysiajs/node";
import { randomUUID } from "node:crypto";
import { subscriptions } from "./broker/index.ts";

const app = new Elysia({ adapter: node() })
    .get("/health", () => "OK")
    .post(
        "/subscribe",
        ({ body }) => {
            subscriptions.sendToQueue(
                "subscriptions",
                Buffer.from(
                    JSON.stringify({
                        userId: randomUUID(),
                        subscriptionType: body.subscriptionType,
                        subscriptionDate: Date.now(),
                        isAutoRenewEnabled: true,
                    }),
                ),
            );

            return {
                message: "Subscription received",
            };
        },
        {
            body: t.Object({
                subscriptionType: t.Union([t.Literal("nitro"), t.Literal("premium")]),
            }),
        },
    );

app.listen(3001);

console.log("🦊 Elysia is running on 3001");
