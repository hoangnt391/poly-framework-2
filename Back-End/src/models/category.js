import mongoose from 'mongoose';
const CategoryModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
  ],
}, {
  timestamps: true,
  versionKey: false,
});

export default mongoose.model('Category', CategoryModel);
