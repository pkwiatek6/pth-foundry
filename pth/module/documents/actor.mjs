export class PTHActor extends Actor {
    /** @override */
    prepareBaseData() {
        super.prepareBaseData();
        this.system.bonuses ??= {};
        this.system.bonuses.initiative ??= 0;
    }

    /** @override */
    prepareDerivedData() {
        super.prepareDerivedData();
        // derived calcs here
    }
}
