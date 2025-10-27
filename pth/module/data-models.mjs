// Define the structure of a charm
export const CharmSchema = {
    type: { type: String, required: true }, // Charm type (for example, shape, appear)
    invocation: { type: String, default: null }, // Optional invocation requirement
    xpCost: { type: Number, required: true }, // XP cost to acquire the charm
    actionCost: { type: String, required: true }, // The action cost to activate the charm
    dicePool: { type: String, default: null }, // Optional dice pool associated with the charm
    cost: {
      wisp: { type: Number, default: 0 }, // Wisp cost
      willpower: { type: Number, default: 0 } // Willpower cost
    },
    duration: { type: String, default: null }, // Optional duration
    upgrades: { type: Array, default: [] } // Optional upgrades that can modify the charm
  };
  