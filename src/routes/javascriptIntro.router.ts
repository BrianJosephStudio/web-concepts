import express, { } from 'express'
import path from "path"
import validateAppPath from "../util/middleware/validateAppPath"
import { useProxyIfDev } from '../util/middleware/devProxy'

const router = express.Router()

const appFolder = path.resolve(__dirname, "..", "..", "apps", "javascript-intro")

//This end point handles a request for the static light mode html file
router.get("/light-mode", (req, res) => {
    res.sendFile(path.resolve(appFolder, "public", "lightMode.html"))
})

//This end point handles a request for the static dark mode html file
router.get("/dark-mode", (req, res) => {
    res.sendFile(path.resolve(appFolder, "public", "darkMode.html"))
})

//This end point handles a request to the main app.
// router.get("/", useProxyIfDev(process.env.JAVASCRIPT_INTRO_PORT), (req, res) => {
//     res.sendFile(path.resolve(appFolder, "dist", "index.html"))
// })

export default router