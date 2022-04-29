import { Schema, model, models } from "mongoose"

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
        trim: true,
        maxlength: [40, "Title must be less than 40 characteres"]
    },
}, {
    timestamps: true,
    versionKey: false
})

export default models.Movies || model('Movies', movieSchema)
