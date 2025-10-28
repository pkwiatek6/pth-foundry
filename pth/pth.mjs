import { PTHActor } from "./module/documents/actor.mjs";
import { PTHActorSheet } from "./module/sheets/actor-sheet.mjs";
import { PTHCharacterDataModel } from "./module/data/character-data.mjs";

Hooks.once("init", function () {
  console.log("PTH | Initializing system");

  // Your document class (keep this)
  CONFIG.Actor.documentClass = PTHActor;

  CONFIG.Actor.dataModels = CONFIG.Actor.dataModels || {};
  CONFIG.Actor.dataModels.character = PTHCharacterDataModel;

  DocumentSheetConfig.unregisterSheet(Actor, "core", ActorSheet);

  // Register your sheet for the "character" type
  DocumentSheetConfig.registerSheet(Actor, "pth", PTHActorSheet, {
    types: ["character"],
    label: "PTH.CharacterSheet",
    makeDefault: true
  });
});

Hooks.once("ready", function () {
  console.log("PTH | ready docClass:", CONFIG.Actor.documentClass?.name);
  if (CONFIG.Actor.documentClass?.name !== "PTHActor") {
    console.warn("PTH | docClass was overwritten; restoring.");
    CONFIG.Actor.documentClass = PTHActor;
    console.log("PTH | restored docClass:", CONFIG.Actor.documentClass?.name);
  }
});