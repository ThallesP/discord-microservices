/**
 * Event emitted when a user subscribes to Discord Nitro
 */
export interface UserSubscribedMessage {
  /** The unique identifier of the user who subscribed */
  userId: string;

  /** The type of Nitro subscription */
  subscriptionType: "nitro" | "premium";

  /** Timestamp when the subscription started */
  subscriptionDate: number;

  /** Whether auto-renewal is enabled for this subscription */
  isAutoRenewEnabled: boolean;
}