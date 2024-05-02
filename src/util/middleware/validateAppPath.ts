import { Request, Response, NextFunction } from "express"
import { accessSync } from "fs"
import path from "path"

const appsFolder = path.resolve(__dirname, "..", "..", "build", "apps")

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const param = req.params.app
        if (!param) throw new Error()
        const app = path.join(appsFolder, param, "index.html")
        accessSync(app)
        next()
    } catch (e) {
        return res.status(404).json({error: "Path not found"})
    }
}