import mongoose from 'mongoose';

export interface PublisherCity extends mongoose.Document {
  name: string;
  city: mongoose.Schema.Types.ObjectId;
}

const publisherSchema = new mongoose.Schema<PublisherCity>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the Publisher City.'],
      unique: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'city',
    },
  },
  {
    timestamps: true,
  },
);

const PublisherCity =
  mongoose.models.PublisherCity ||
  mongoose.model<PublisherCity>('PublisherCity', publisherSchema);

export default PublisherCity;
