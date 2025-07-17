import Product from '../model/Product.js';

// GET all products (optionally filter by departmentId)
export const getProducts = async (req, res) => {
  try {
    const { departmentId } = req.query;

    const filter = departmentId ? { department: departmentId } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create product
export const createProduct = async (req, res) => {
  const { name, department } = req.body;

  try {
    const product = new Product({ name, department });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, department } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, department },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
