import mongoose from 'mongoose';

export interface Author extends mongoose.Document {
  name: string;
}

const authorSchema = new mongoose.Schema<Author>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the Author.'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Author =
  mongoose.models.Author || mongoose.model<Author>('Author', authorSchema);

export default Author;
