// Define the CharmDocument class
class CharmDocument extends Item {
    // Your custom document logic here
}
CONFIG.Item.documentClass = CharmDocument;

// Define the CharmSheet class
class CharmSheet extends ItemSheet {
    // Your custom sheet logic here
}
Items.unregisterSheet("core", ItemSheet);
Items.registerSheet("pth", CharmSheet, { types: ["charm"], makeDefault: true });
