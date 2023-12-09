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

    return knex.schema.createTable("users", function (table) {
        table.increments("id").primary();
        table.string("email", 100).notNullable();
        table.string("password", 100).notNullable();
        table.string("role", 50).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.dateTime("updated_at").defaultTo(knex.fn.now());
    }).raw(`
        CREATE TRIGGER update_users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at();
    `);
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users")
}
