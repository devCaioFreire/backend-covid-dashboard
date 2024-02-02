import { Router } from "express";
import { CovidController } from "../controller/covid.controller";

const router = Router();

router.get('/GET_All_DATA', new CovidController().getApi);

export { router };