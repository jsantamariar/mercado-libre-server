const mercadolibreService = require("../services/mercadolibreService");
const errorHandler = require("../utils/errorHandler");

exports.searchItems = async (req, res) => {
  try {
    const result = await mercadolibreService.searchItems(req.query.q);
    res.json(result);
  } catch (error) {
    errorHandler.handle(error, res);
  }
};

exports.getItemDetails = async (req, res) => {
  try {
    const result = await mercadolibreService.getItemDetails(req.params.id);
    res.json(result);
  } catch (error) {
    errorHandler.handle(error, res);
  }
};
