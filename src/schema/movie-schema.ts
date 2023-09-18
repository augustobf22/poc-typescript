import Joi from "joi"
import { CreateMovie } from "@/protocol/movie-protocols";

const schemaMovie = Joi.object<CreateMovie>({
    title: Joi.string().required()
})

export default schemaMovie;