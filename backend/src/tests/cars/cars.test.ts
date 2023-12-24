import request from "supertest";
import express from "express";
import CarService from "../../services/carService";
import { getById } from "../../controllers/carsController";

const app = express();
const appRoute = require("../../../index");

jest.mock("../../services/carService.ts");

app.use(express.json());
app.get("/cars/get/:id", getById);

describe("Car API", () => {
    describe("GET Method", () => {
        it("should get list of cars", async () => {
            (CarService as any).prototype.getAll.mockResolvedValueOnce([
                { id: 1, make: "Toyota", model: "Camry" },
                { id: 2, make: "Honda", model: "Civic" },
            ]);

            const response = await request(appRoute).get("/cars/");
            expect(response.status).toBe(200);

            expect(response.body).toEqual([
                { id: 1, make: "Toyota", model: "Camry" },
                { id: 2, make: "Honda", model: "Civic" },
            ]);
        });

        it("should handle error when getting list of cars", async () => {
            (CarService as any).prototype.getAll.mockRejectedValueOnce(
                new Error("Database error")
            );
            const response = await request(appRoute).get("/cars/");
            expect(response.status).toBe(500);
            expect(response.text).toBe("Error connecting");
        });

        it("should get a specific car by ID", async () => {
            const mockedCar = { id: 1, make: "Toyota", model: "Camry" };
            (CarService as any).prototype.getCarByID.mockResolvedValueOnce(
                mockedCar
            );
            const response = await request(app).get("/cars/get/1");
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockedCar);
        });

        it("should handle error when getting a specific car by ID", async () => {
            const errorMessage = "Car not found";
            (CarService as any).prototype.getCarByID.mockRejectedValueOnce(
                new Error(errorMessage)
            );
            const response = await request(app).get("/cars/get/2");
            expect(response.status).toBe(500);
        });
    });

    describe("POST Method", () => {
        it("should respond with success message on successful submission", async () => {
            const dataBody = {
                name: 'Sedan',
                id_car_type: 1,
                id_car_brand: 2,
                daily_price: 50.99,
                size: 'Medium',
                start_rent: '2023-01-01',
                finish_rent: '2023-01-10',
                capacity: 5,
                description: 'A comfortable sedan',
                transmission: 'Automatic',
                year: 2022,
                available_at: '2023-01-01'
            };
        
            const imagePath = './src/tests/cars/car01.min.jpg';
        
            const res = await request(appRoute)
                .post('/cars/post-car')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNhamFAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MDI5MDQyMzN9.xrOP6NTKDFLl3lV1ucdIJXPT0mdUYPQyofl-YEhTp1s')
                .field('name', dataBody.name)
                .field('id_car_type', dataBody.id_car_type)
                .field('id_car_brand', dataBody.id_car_brand)
                .field('daily_price', dataBody.daily_price)
                .field('size', dataBody.size)
                .field('start_rent', dataBody.start_rent)
                .field('finish_rent', dataBody.finish_rent)
                .field('capacity', dataBody.capacity)
                .field('description', dataBody.description)
                .field('transmission', dataBody.transmission)
                .field('year', dataBody.year)
                .field('available_at', dataBody.available_at)
                .attach('image', imagePath)
    
            expect(res.status).toBe(200);
        });
    });

    describe('PATCH Method', () => {
        it("should respond with success status on successful update", async () => {
            const dataBody = {
                name: 'Sedan',
                id_car_type: 1,
                id_car_brand: 2,
                daily_price: 50.99,
                size: 'Medium',
                start_rent: '2023-01-01',
                finish_rent: '2023-01-10',
                capacity: 5,
                description: 'A comfortable sedan',
                transmission: 'Automatic',
                year: 2022,
                available_at: '2023-01-01',
                image : 'wwwimagetest'
            };
        
            const res = await request(appRoute)
                .put('/cars/car-edit/1')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNhamFAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MDI5MDQyMzN9.xrOP6NTKDFLl3lV1ucdIJXPT0mdUYPQyofl-YEhTp1s')
                .field('name', dataBody.name)
                .field('id_car_type', dataBody.id_car_type)
                .field('id_car_brand', dataBody.id_car_brand)
                .field('daily_price', dataBody.daily_price)
                .field('size', dataBody.size)
                .field('start_rent', dataBody.start_rent)
                .field('finish_rent', dataBody.finish_rent)
                .field('capacity', dataBody.capacity)
                .field('description', dataBody.description)
                .field('transmission', dataBody.transmission)
                .field('year', dataBody.year)
                .field('available_at', dataBody.available_at)
                .field('image', dataBody.image)
    
            expect(res.status).toBe(200);
        });

    })

    describe('DELETE Method', () => {
        it('should respond with success message on successful deletion', async () => {
    
            const res = await request(appRoute)
                .delete(`/cars/car-delete/1`)
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNhamFAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MDI5MDQyMzN9.xrOP6NTKDFLl3lV1ucdIJXPT0mdUYPQyofl-YEhTp1s')
    
            expect(res.status).toBe(200);
        });
    
    });    
});
