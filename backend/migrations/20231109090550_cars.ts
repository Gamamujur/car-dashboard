import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        CREATE OR REPLACE FUNCTION update_updated_at()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = CURRENT_TIMESTAMP;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
    `);
    return knex.schema
        .createTable("car_type", function (table) {
            table.increments("id").primary();
            table.string("type_name");
        })
        .createTable("car_brand", function (table) {
            table.increments("id").primary();
            table.string("brand_name");
        })
        .createTable("car", function (table) {
            table.increments("id").primary();
            table.string("name", 255).notNullable();
            table.integer("id_car_type").unsigned();
            table.integer("id_car_brand").unsigned();
            table.integer("daily_price");
            table.string("size", 10);
            table.text("image");
            table.date("start_rent").defaultTo(knex.fn.now());
            table.date("finish_rent").defaultTo(knex.fn.now());
            table.integer('capacity').unsigned();
            table.integer('year').unsigned();
            table.string('description',255).notNullable();
            table.string('transmission',25).notNullable();
            table.date('available_at').defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table.dateTime("updated_at").defaultTo(knex.fn.now());
            table.foreign("id_car_type").references("id").inTable("car_type");
            table.foreign("id_car_brand").references("id").inTable("car_brand");
        }).raw(`
            CREATE TRIGGER update_car_updated_at
            BEFORE UPDATE ON car
            FOR EACH ROW
            EXECUTE FUNCTION update_updated_at();
        `);
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("car")
        .dropTable("car_type")
        .dropTable("car_brand");
}
