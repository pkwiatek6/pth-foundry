// Define the CharmDocument class
class CharmDocument extends Item {
    // Your custom document logic here
    prepareData() {
        super.prepareData();
        const itemData = this.data;

        // Set XP cost based on the highest dot total of the charm type
        itemData.xpCost = this.calculateXPCost(itemData.data.type);

        // Default to no invocation if not specified
        itemData.invocation = itemData.invocation || null;
    }
    // Custom method to apply upgrades
    applyUpgrade(upgrade) {
        // Example of applying an upgrade that alters Wisp cost
        if (upgrade.wispCostReduction) {
            this.data.cost.wisp = Math.max(0, this.data.cost.wisp - upgrade.wispCostReduction);
        }

        // Handle other upgrade types...
    }
}
CONFIG.Item.documentClass = CharmDocument;

// Define the CharmSheet class
class CharmSheet extends ItemSheet {
    // Your custom sheet logic here
}
Items.unregisterSheet("core", ItemSheet);
Items.registerSheet("pth", CharmSheet, { types: ["charm"], makeDefault: true });
