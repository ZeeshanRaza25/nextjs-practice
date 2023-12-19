import mongoose from 'mongoose';

export interface Publisher extends mongoose.Document {
  name: string;
  city: mongoose.Schema.Types.ObjectId;
}

const publisherSchema = new mongoose.Schema<Publisher>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the Publisher.'],
      unique: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    },
  },
  {
    timestamps: true,
  },
);

const Publisher =
  mongoose.models.Publisher ||
  mongoose.model<Publisher>('Publisher', publisherSchema);

export default Publisher;
