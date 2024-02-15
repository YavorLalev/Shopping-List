import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    try {
      const updatedProduct = request.body;
      await Product.findByIdAndUpdate(id, updatedProduct);
      return response
        .status(200)
        .json({ status: `Product ${id} successfully updated. ` });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Product ${id} successfully deleted. ` });
  }
}
