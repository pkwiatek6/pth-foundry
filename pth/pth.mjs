import { PTHActor } from "./module/documents/actor.mjs";
import { PTHActorSheet } from "./module/sheets/actor-sheet.mjs";

Hooks.once("init", () => {
  console.log("PTH | Initializing system");

  // Register the custom document class
  CONFIG.Actor.documentClass = PTHActor;
  // Register your custom sheet
  Actors.registerSheet("pth", PTHActorSheet, {
    typea:["character"],
    makeDefault: true,
    label: "PTH Actor Sheet"
  });
});

Hooks.on("preCreateActor", (doc, data, options, userId) => {
  console.group("PTH | preCreateActor debug");
  console.log("Incoming data:", foundry.utils.deepClone(data));
  console.log("Doc source before:", foundry.utils.deepClone(doc._source));
  console.log("Options:", options);
  console.log("User:", userId);
  if (!data.type) {
    console.warn("Missing type — setting to 'character'");
    doc.updateSource({ type: "character" });
  }
  console.log("Doc source after:", foundry.utils.deepClone(doc._source));
  console.groupEnd();
});

Hooks.on("createActor", (doc, options, userId) => {
  console.group("PTH | createActor debug");
  console.log("Created Actor:", doc.name);
  console.log("Actor type:", doc.type);
  console.log("Actor system data:", doc.system);
  console.groupEnd();
});