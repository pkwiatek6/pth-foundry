import { PTHActor } from "./documents/actor.mjs";
import { PTHActorSheet } from "./sheets/actor-sheet.mjs";

Hooks.once("init", () => {
  console.log("PTH | Initializing system");

  CONFIG.Actor.documentClass = PTHActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("pth", PTHActorSheet, {
    makeDefault: true,
    label: "PTH Actor Sheet"
  });
});

Hooks.on("preCreateActor", (doc, data) => {
  if (!data.type) data.type = "character";
});
