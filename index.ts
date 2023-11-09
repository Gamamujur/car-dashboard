import express, { Express } from "express";
import carRouter from "./src/routes/carRoutes";
import { upload } from "./src/middleware/upload";
import { knex } from "knex";
import { Model } from "objection";

const app: Express = express();
const port = 3000 || 8000;
app.use(express.json());
app.use(express.urlencoded());
app.use(upload.single("image"));

const knexInstance = knex({
    client: 'postgresql',
    connection: {
        database: 'chapter_5',
        user: 'bejok',
        password: '123456'
    }
})

Model.knex(knexInstance)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/pages/index.html");
});

app.get("/edit-page/:id", (req, res) => {
    res.sendFile(__dirname + `/src/pages/edit-page.html`);
});

app.use("/car", carRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
