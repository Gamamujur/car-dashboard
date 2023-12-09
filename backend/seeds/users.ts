import { Knex } from "knex";
import { encryptPass } from "../src/utilities/encryptPassword";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            email: "tesaja@gmail.com",
            password: await encryptPass("tes123"),
            role: "superadmin",
        },
        {
            id: 2,
            email: "tesadmin@gmail.com",
            password: await encryptPass("tesadmin"),
            role: "admin",
        },
    ]);
}
