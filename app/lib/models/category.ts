import mongoose from 'mongoose';

export interface Category extends mongoose.Document {
  name: string;
}

const categorySchema = new mongoose.Schema<Category>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for the Category.'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Category =
  mongoose.models.Category ||
  mongoose.model<Category>('Category', categorySchema);

export default Category;
