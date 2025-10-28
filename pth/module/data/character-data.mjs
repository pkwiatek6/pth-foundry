const { fields } = foundry.data;

export class PTHCharacterDataModel extends foundry.abstract.DataModel {
  static defineSchema() {
    const { SchemaField, NumberField } = fields;

    return {
      attributes: new SchemaField({
        physical: new SchemaField({
          mundane: new SchemaField({
            strength: new NumberField({ initial: 1 }),
            dexterity: new NumberField({ initial: 1 }),
            stamina: new NumberField({ initial: 1 })
          }),
          magical: new SchemaField({
            strength: new NumberField({ initial: 0 }),
            dexterity: new NumberField({ initial: 0 }),
            stamina: new NumberField({ initial: 0 })
          })
        }),
        mental: new SchemaField({
          mundane: new SchemaField({
            intelligence: new NumberField({ initial: 1 }),
            wits: new NumberField({ initial: 1 }),
            resolve: new NumberField({ initial: 1 })
          }),
          magical: new SchemaField({
            intelligence: new NumberField({ initial: 0 }),
            wits: new NumberField({ initial: 0 }),
            resolve: new NumberField({ initial: 0 })
          })
        }),
        social: new SchemaField({
          mundane: new SchemaField({
            presence: new NumberField({ initial: 1 }),
            manipulation: new NumberField({ initial: 1 }),
            composure: new NumberField({ initial: 1 })
          }),
          magical: new SchemaField({
            presence: new NumberField({ initial: 0 }),
            manipulation: new NumberField({ initial: 0 }),
            composure: new NumberField({ initial: 0 })
          })
        })
      }),
      health: new NumberField({ initial: 10 }),
      willpower: new NumberField({ initial: 5 })
    };
  }
}
