export class PTHActor extends Actor {
  prepareBaseData() {
    super.prepareBaseData();
    // v10+: use this.system
    this.system.bonuses ??= {};
    this.system.bonuses.initiative ??= 0;
  }

  prepareDerivedData() {
    super.prepareDerivedData();
    // compute derived values later
  }
}
