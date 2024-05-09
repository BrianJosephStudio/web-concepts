const { createProxyMiddleware } = require('http-proxy-middleware')
import { Request, Response, NextFunction } from 'express';


export const useProxyIfDev = (appPort: string | undefined) => {
    try {
        if (!appPort) {
            throw new Error("App Port Env is not defined")
        }

        if (
            process.env.NODE_ENV === 'development' &&
            process.env.USE_VITE_SERVER === 'true'
        ) {
            const proxy = createProxyMiddleware({
                target: `http://localhost:${appPort}`,
                changeOrigin: true,
                // ignorePath: true
            });
            return proxy
        }
        return (_req: Request, _res: Response, next: NextFunction) => {
            next();
        };
    } catch (e) {
        console.error(e)
    }
};
