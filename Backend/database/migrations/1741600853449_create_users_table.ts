import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('avatarUrl').nullable()
      table.string('phone', 20).notNullable()
      table.enum('role', ['admin', 'vendeur', 'client']).notNullable().defaultTo('client')
      table.enum('status', ['active', 'blocked', 'banned']).defaultTo('active')
      table.enum('gender', ['male', 'female']).notNullable()
      table.boolean('isVerified').defaultTo(false) // isVerfified permet de verifier si le vendeur est en mode premium ou non
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}