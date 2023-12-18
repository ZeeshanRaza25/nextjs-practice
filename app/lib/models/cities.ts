import mongoose from 'mongoose';

export interface City extends mongoose.Document {
  name: string;
}

const citySchema = new mongoose.Schema<City>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the City.'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const City = mongoose.models.City || mongoose.model<City>('City', citySchema);

export default City;
