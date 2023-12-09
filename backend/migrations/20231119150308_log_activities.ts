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

    return knex.schema.createTable("log_activities", function (table) {
        table.increments("id").primary();
        table.integer("id_car").notNullable();
        table.integer("id_user").notNullable();
        table.string("action", 10).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.dateTime("updated_at").defaultTo(knex.fn.now());
        table.foreign("id_user").references("id").inTable("users");
    }).raw(`
    CREATE TRIGGER update_log_updated_at
    BEFORE UPDATE ON log_activities
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
    `);
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("log_activities");
}
