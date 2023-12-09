import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("car").del();

    // Inserts seed entries
    await knex("car").insert([
        {
            id: 111,
            id_car_type: 1,
            id_car_brand: 1,
            name: "Car 1",
            daily_price: 1000,
            size: "medium",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699250370/lnrb1o2hvjybffchgwea.png",
            start_rent: new Date("2023-12-01T08:00:00Z"),
            finish_rent: new Date("2023-12-10T16:00:00Z"),
            capacity: 2,
            year: 2015,
            description:'Leather-wrapped shift knob. Dual front illuminated visor vanity mirrors. Battery saver. Driver & front passenger map pockets.',
            transmission:'Automatic',
            available_at:'2023-03-23T15:49:05.563Z'
        },
        {
            id: 112,
            id_car_type: 2,
            id_car_brand: 2,
            name: "Car 2",
            daily_price: 150,
            size: "large",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699345633/xltvkoskltveigeqlnxr.jpg",
            start_rent: new Date("2023-12-05T10:00:00Z"),
            finish_rent: new Date("2023-12-15T18:00:00Z"),
            capacity: 4,
            year: 2017,
            description:'Energy absorbing steering column. 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter.',
            transmission:'Automanual',
            available_at:'2023-03-23T15:49:05.563Z'
        },
        {
            id: 113,
            id_car_type: 3,
            id_car_brand: 3,
            name: "Car 3",
            daily_price: 150,
            size: "small",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699350643/wdpugjs9uftnnmraxudh.jpg",
            start_rent: new Date("2023-12-08T12:00:00Z"),
            finish_rent: new Date("2023-12-18T20:00:00Z"),
            capacity: 6,
            year: 2018,
            description:'Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.',
            transmission:'Automatic',
            available_at:'2023-03-23T15:49:05.563Z'
        },
        {
            id: 114,
            id_car_type: 4,
            id_car_brand: 4,
            name: "Car 4",
            daily_price: 150,
            size: "medium",
            image: "http://res.cloudinary.com/djafce1li/image/upload/v1699457741/lh6n2aoi1pgroqyfa40h.jpg",
            start_rent: new Date("2023-12-12T14:00:00Z"),
            finish_rent: new Date("2023-12-22T22:00:00Z"),
            capacity: 2,
            year: 2020,
            description:'Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.',
            transmission:'Automanual',
            available_at:'2023-03-23T15:49:05.563Z'
        },
    ]);
}
