import { subscriptions } from ".";

subscriptions.consume("subscriptions", (message) => {
    if (!message) return null

    console.log(message);

    subscriptions.ack(message);
},
    {
        noAck: false,
    },
);