import express, { Request, Response } from 'express'
import path from "path"
import validateAppPath from "../util/middleware/validateAppPath"
import javascriptIntroRoutes from "./javascriptIntro.router"

const router = express.Router()

const appsFolder = path.resolve(__dirname, "..", "..", "build", "apps")

router.use("/javascript-intro", javascriptIntroRoutes)

export default router