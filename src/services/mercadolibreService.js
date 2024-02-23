const axios = require("axios");

const API_BASE_URL = "https://api.mercadolibre.com";

exports.searchItems = async (query) => {
  if (!query) {
    throw new Error("Query parameter is required");
  }

  const searchResponse = await axios.get(`${API_BASE_URL}/sites/MLA/search`, {
    params: { q: query },
  });

  const items = searchResponse.data.results.slice(0, 4).map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: +(item.price % 1).toFixed(2).substring(2),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));

  return {
    author: {
      name: "Jorge",
      lastname: "Santamaria",
    },
    categories: searchResponse.data.filters,
    items,
  };
};

exports.getItemDetails = async (id) => {
  if (!id) {
    throw new Error("Item ID parameter is required");
  }

  const itemResponse = await axios.get(`${API_BASE_URL}/items/${id}`);
  const descriptionResponse = await axios.get(
    `${API_BASE_URL}/items/${id}/description`
  );

  const itemDetails = {
    id: itemResponse.data.id,
    title: itemResponse.data.title,
    price: {
      currency: itemResponse.data.currency_id,
      amount: Math.floor(itemResponse.data.price),
      decimals: +(itemResponse.data.price % 1).toFixed(2).substring(2),
    },
    picture: itemResponse.data.pictures[0].url,
    condition: itemResponse.data.condition,
    free_shipping: itemResponse.data.shipping.free_shipping,
    sold_quantity: itemResponse.data.sold_quantity,
    description: descriptionResponse.data.plain_text,
  };

  return {
    author: {
      name: "Jorge",
      lastname: "Santamaria",
    },
    item: itemDetails,
  };
};
