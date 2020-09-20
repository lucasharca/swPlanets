import mongoose, { Document, Schema } from 'mongoose';

const PlanetSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    climate: {
      type: String,
      lowercase: true,
    },
    terrain: {
      type: String,
      lowercase: true,
    },
    filmsQnt: {
      type: Number,
      lowercase: true,
    }
  },{
    timestamps: true,
  }
)

export default mongoose.model('Planet', PlanetSchema);