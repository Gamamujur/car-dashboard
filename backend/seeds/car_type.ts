import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("car_type").del();

    // Inserts seed entries
    await knex("car_type").insert([
        { id: 1, type_name: "SUV" },
        { id: 2, type_name: "Minivan" },
        { id: 3, type_name: "Sports Car" },
        { id: 4, type_name: "Supercar" }
    ]);
};
