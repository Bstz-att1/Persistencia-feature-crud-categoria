import { CategoryModel } from "../models/category.model.js";

const getAllCategories = (req, res) => {
  const categories = CategoryModel.findAll();
  res.status(200).json({
    success: true,
    message: "Lista de categorías",
    data: categories,
    errors: [],
  });
};

const getCategoryById = (req, res) => {
  try {
    const { id } = req.params;
    const category = CategoryModel.findById(Number(id));
    // Validamos si la categoría existe
    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Categoría con ID ${id} no encontrada`,
        data: [],
        errors: [],
      });
    }
    res.status(200).json({
      success: true,
      message: "Categoría encontrada correctamente",
      data: category,
      errors: [],
    });
  } catch (error) { 
    res.status(500).json({
      success: false,
      message: "Error al procesar la búsqueda",
      data: [],
      errors: [],
    });
  }
};