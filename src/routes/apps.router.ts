import express, { Request, Response } from 'express'
import path from "path"
import validateAppPath from "../util/middleware/validateAppPath"

const router = express.Router()

const appsFolder = path.resolve(__dirname, "..", "..", "build", "apps")

router.get("/:app", validateAppPath,(req, res) => {
    const appParam = req.params.app
    console.log(appParam)
    const project = path.join(appsFolder, appParam, "index.html")
    res.sendFile(project)
})

export default router