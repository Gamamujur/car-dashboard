import express, { Express } from "express";
import carRouter from "./src/routes/carRoutes";
import userRouter from "./src/routes/userRoute";
import { upload } from "./src/middleware/upload";
import { knex } from "knex";
import { Model } from "objection";
import authorizeToken from "./src/middleware/authentication";

const YAML = require("yamljs")
const swaggerUI = require("swagger-ui-express")
const swaggerDoc = YAML.load('./openapi.yaml')

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

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use("/car",authorizeToken(['superadmin','admin']), carRouter);
app.use("/v1/user", userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
