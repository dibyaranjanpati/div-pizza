const { default: mongoose } = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    category: { type: "string", required: true },
    foodType: { type: "string", required: true },
    price: { type: "object", required: true },
    img: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  { timeStamps: true }
);

const PizzaData =
  mongoose.models.PizzaData || mongoose.model("PizzaData", dataSchema);

export default PizzaData;
