const productService = require('../services/productService');

async function getAllProduct(req, res) {
    try {
        const products = await productService.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data produk", error: error.message });
    }
}

async function getProductById(req, res) {
    const id = req.params.id;
    try {
        const product = await productService.getProductById(id);
        if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil data produk", error: error.message });
    }
}

async function createProduct(req, res) {
    const data = req.body;
    try {
        const productId = await productService.createProduct(data);
        res.status(201).json({ message: "Produk berhasil dibuat", product_id: productId });
    } catch (error) {
        res.status(500).json({ message: "Gagal membuat produk", error: error.message });
    }
}

async function updateProduct(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
        const updated = await productService.updateProduct(id, data);
        if (!updated) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ message: "Produk berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: "Gagal memperbarui produk", error: error.message });
    }
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    try {
        const deleted = await productService.deleteProduct(id);
        if (!deleted) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ message: "Produk berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: "Gagal menghapus produk", error: error.message });
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
