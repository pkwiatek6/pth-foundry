// Define a base actor for your system
class CharacterActor extends Actor {
    // You can override methods or add custom functionality here
    prepareData() {
      super.prepareData();
  
      // Example: Initialize custom attributes or modify data
      const actorData = this.data;
      actorData.data.bonuses = actorData.data.bonuses || { initiative: 0 };
    }
  }
  
  // Define the custom actor sheet for characters
  class CharacterSheet extends ActorSheet {
    // Specify the template to be used
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["pth", "sheet", "actor"],
        template: "styles/sheets/actors/character-sheet.html",
        width: 600,
        height: 600
      });
    }
  
    // Optionally, override methods to add functionality to the actor sheet
    getData() {
      const data = super.getData();
  
      // Add custom data or modify the sheet data here
      return data;
    }
  }

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
// Register the Actor and Sheet with Foundry
Items.unregisterSheet("core", ItemSheet);
Items.registerSheet("pth", CharmSheet, { types: ["charm"], makeDefault: true });

Actors.unregisterSheet("core", ActorSheet);
Actors.registerSheet("pth", CharacterSheet, { makeDefault: true });
CONFIG.Actor.documentClass = CharacterActor;
