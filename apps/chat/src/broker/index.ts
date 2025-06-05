import amqp from "amqplib";

export const broker = await amqp.connect("amqp://localhost:5672");
export const subscriptions = await broker.createChannel();
subscriptions.assertQueue("subscriptions");