import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("car").del();

    // Inserts seed entries
    await knex("car").insert([
        {
            id : 1,
            id_car_type: 1,
            id_car_brand: 1,
            name: "Car 1",
            daily_price: 1000,
            size: "medium",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699250370/lnrb1o2hvjybffchgwea.png",
        },
        {
            id: 2,
            id_car_type: 2,
            id_car_brand: 2,
            name: "Car 2",
            daily_price: 150,
            size: "large",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699345633/xltvkoskltveigeqlnxr.jpg",
        },
        {
            id: 3,
            id_car_type: 3,
            id_car_brand: 3,
            name: "Car 3",
            daily_price: 150,
            size: "small",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699350643/wdpugjs9uftnnmraxudh.jpg",
        },
        {
            id: 4,
            id_car_type: 4,
            id_car_brand: 4,
            name: "Car 4",
            daily_price: 150,
            size: "medium",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699457741/lh6n2aoi1pgroqyfa40h.jpg",
        },
    ]);
};
