export class PTHActor extends Actor {
  prepareBaseData() {
    super.prepareBaseData();
    this.system.bonuses ??= {};
    this.system.bonuses.initiative ??= 0;
  }

  prepareDerivedData() {
    super.prepareDerivedData();
    // derived calcs here
  }
}
