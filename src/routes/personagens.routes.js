import { Router } from "express"

const personagensRoutes = Router ()

const personagens = [
    {
        id:100,
        nome: "mickey",
        vivo: true,
        studio: "Disney"
    },

    {
        id:101,
        nome: "minnie",
        vivo: true,
        studio: "Disney"
    },

    {
        id:102,
        nome: "Pluto",
        vivo: true,
        studio: "Disney"
    }
]

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})