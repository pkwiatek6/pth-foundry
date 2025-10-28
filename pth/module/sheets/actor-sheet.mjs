export class PTHActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["pth", "sheet", "actor"],
      template: "systems/pth/templates/actor/character-sheet.hbs",
      width: 600,
      height: 400,
      resizable: true
    });
  }

  getData(options = {}) {
    const context = super.getData(options);
    context.system = this.actor.system; // expose for template
    return context;
  }
}
