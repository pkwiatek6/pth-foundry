export class PTHActorSheet extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["pth", "sheet", "actor"],
            width: 700,
            height: 600,
            resizable: true,
            template: "systems/pth/templates/actor/character-sheet.hbs"
        });
    }
    /** @override */
    get template() {
        return "systems/pth/templates/actor/character-sheet.hbs";
    }
    getData(options = {}) {
        const data = super.getData(options);
        data.system = this.actor.system;
        return data;
    }
}
