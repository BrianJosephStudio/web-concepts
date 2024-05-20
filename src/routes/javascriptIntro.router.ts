import express, { } from 'express'
import path from "path"
import validateAppPath from "../util/middleware/validateAppPath"
import { useProxyIfDev } from '../util/middleware/devProxy'

const router = express.Router()

const appFolder = path.resolve(__dirname, "..", "..", "apps", "javascript-intro")


router.get("/light-mode", (req, res) => {
    res.sendFile(path.resolve(appFolder, "static", "lightMode.html"))
})

router.get("/dark-mode", (req, res) => {
    res.sendFile(path.resolve(appFolder, "static", "darkMode.html"))
})

router.use("/", express.static(path.resolve(appFolder)))

router.use("*", (req, res) => {
    res.sendFile(path.resolve(appFolder, "index.html"))
})

export default router