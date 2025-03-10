import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.decimal('price').notNullable()
      table.integer('stock').notNullable()
      table.decimal('rating').nullable()
      table.integer('image_id').unsigned().notNullable().references('id').inTable('images').onDelete('CASCADE')
      table.boolean('is_admin_product').defaultTo(false)
      table.enum('status', ['available', 'out_of_stock', 'deleted']).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}