import express from "express";
import mainRouter from "../routers/index.js"
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api", mainRouter)//manejador de rutas


//middleware de ruta error
app.use((req, res, next) => {
  return res.status(404).json({
    error: -2,
    descripcion: `ruta ${req.url} not implemented`,
  });
});
export default app;