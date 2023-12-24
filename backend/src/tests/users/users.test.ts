import request from "supertest";

const appRoute = require("../../../index");

describe("User API", () => {
    it("should return user data", async () => {
        const response = await request(appRoute)
            .get("/v1/user/getUser")
            .set(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNhamFAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MDI5MDQyMzN9.xrOP6NTKDFLl3lV1ucdIJXPT0mdUYPQyofl-YEhTp1s"
            );

        expect(response.status).toBe(200);
    });

    it("should register a new user", async () => {
        const randomEmail = () => {
            const charset =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let result = "";
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                result += charset.charAt(randomIndex);
            }
            return result;
        };

        const userBody = {
            email: `${randomEmail()}@example.com`,
            password: "testpassword",
        };

        const response = await request(appRoute)
            .post("/v1/user/register")
            .send(userBody);


        expect(response.status).toBe(201);
    });

    it("should update user role", async () => {
        const role = "admin";

        const response = await request(appRoute)
            .put(`/v1/user/edit-user/2`)
            .set(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXNhamFAZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MDI5MDQyMzN9.xrOP6NTKDFLl3lV1ucdIJXPT0mdUYPQyofl-YEhTp1s"
            )
            .send({ role: role });

        expect(response.status).toBe(200);
    });
});
