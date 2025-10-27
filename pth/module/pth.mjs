// systems/pth/module/pth.mjs

/* -----------------------------
 * Documents
 * ----------------------------- */

class CharacterActor extends Actor {
  /** v10+: initialize defaults that are part of the stored system data */
  prepareBaseData() {
    super.prepareBaseData();
    // Ensure a bonuses object exists
    this.system.bonuses ??= {};
    this.system.bonuses.initiative ??= 0;
  }

  /** v10+: compute any derived data here (do not persist with update()) */
  prepareDerivedData() {
    super.prepareDerivedData();
    // Example: compute final initiative mod (keep it derived-only)
    this.system.derived ??= {};
    this.system.derived.initiativeTotal =
      (this.system.bonuses?.initiative ?? 0);
  }
}

class CharmDocument extends Item {
  prepareBaseData() {
    super.prepareBaseData();
    // Ensure stable structure
    this.system.type ??= null; // your charm type taxonomy
    this.system.cost ??= { wisp: 0, willpower: 0 };
  }

  prepareDerivedData() {
    super.prepareDerivedData();
    // Compute (do not persist) an XP cost based on current type
    const t = this.system.type;
    this.system.derived ??= {};
    this.system.derived.xpCost = this.calculateXPCost(t);
  }

  // Placeholder — replace with your real rules
  calculateXPCost(type) {
    // Example mapping
    const table = {
      minor: 1,
      standard: 2,
      major: 4
    };
    return table[type] ?? 0;
  }

  /** Apply an upgrade and PERSIST changes */
  async applyUpgrade(upgrade = {}) {
    // Example: reduce wisp cost. Read current, compute new, then update.
    if (upgrade.wispCostReduction) {
      const current = this.system.cost?.wisp ?? 0;
      const next = Math.max(0, current - upgrade.wispCostReduction);
      await this.update({ "system.cost.wisp": next });
    }
    // handle other upgrade types...
  }
}

/* -----------------------------
 * Sheets
 * ----------------------------- */

class CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["pth", "sheet", "actor"],
      template: "systems/pth/templates/actor/character-sheet.hbs",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }

  async getData(options) {
    const data = await super.getData(options);
    // expose helpers / derived props if you want
    return data;
  }
}

class CharmSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["pth", "sheet", "item", "charm"],
      template: "systems/pth/templates/item/charm-sheet.hbs",
      width: 560,
      height: 480
    });
  }

  async getData(options) {
    const data = await super.getData(options);
    return data;
  }
}

/* -----------------------------
 * System init / registration
 * ----------------------------- */

Hooks.once("init", () => {
  console.log("pth | Initializing Princess the Hopeful system");

  // Initiative (manifest key is legacy; do it in code for v10+)
  CONFIG.Combat.initiative = { formula: "1d10" };

  // Register custom document classes
  CONFIG.Actor.documentClass = CharacterActor;
  CONFIG.Item.documentClass = CharmDocument;

  // Register sheets
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("pth", CharacterSheet, {
    types: ["character"], // make sure system.json declares this Actor type
    makeDefault: true,
    label: "PTH Character Sheet"
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("pth", CharmSheet, {
    types: ["charm"], // make sure system.json declares this Item type
    makeDefault: true,
    label: "PTH Charm Sheet"
  });
});
