import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("car_brand").del();

    // Inserts seed entries
    await knex("car_brand").insert([
        { id: 1, brand_name: "Toyota" },
        { id: 2, brand_name: "Honda" },
        { id: 3, brand_name: "Lamborghini" },
        { id: 4, brand_name: "Ford" },
    ]);
};
