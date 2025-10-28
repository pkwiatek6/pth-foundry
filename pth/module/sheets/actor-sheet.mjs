export class PTHActorSheet extends ActorSheet {
    static get defaultOptions() {
        const opts = foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["pth", "sheet", "actor"],
            width: 700,
            height: 600,
            template: `systems/pth/templates/actors/character-sheet.hbs`
        });
        console.log("PTH | Template path:", opts.template);
        return opts;
    }
}
