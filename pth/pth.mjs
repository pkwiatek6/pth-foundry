import { PTHActor } from "./module/documents/actor.mjs";
import { PTHActorSheet } from "./module/sheets/actor-sheet.mjs";
import { PTHCharacterDataModel } from "./data/character-data.mjs";

Hooks.once("init", () => {
  console.log("PTH | Initializing system");

  game.pth = {
    PTHActor
  };
  // Your document class (keep this)
  CONFIG.Actor.documentClass = PTHActor;

  // Unregister the core v1 sheet (same pattern dnd5e uses)
  DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);

  // Register your sheet for the "character" type
  DocumentSheetConfig.registerSheet(Actor, "pth", PTHActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "PTH.CharacterSheet"
  });
});

Hooks.once("ready", () => {
  console.log("PTH | ready docClass:", CONFIG.Actor.documentClass?.name);
  if (CONFIG.Actor.documentClass?.name !== "PTHActor") {
    console.warn("PTH | docClass was overwritten; restoring.");
    CONFIG.Actor.documentClass = PTHActor;
    console.log("PTH | restored docClass:", CONFIG.Actor.documentClass?.name);
  }
});