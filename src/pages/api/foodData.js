// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import PizzaData from "@/models/PizzaData";
import db from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await db.connect();
    for (let i = 0; i < req.body.length; i++) {
      let pizaa = new PizzaData({
        name: req.body[i].name,
        category: req.body[i].category,
        foodType: req.body[i].foodType,
        price: req.body[i].price,
        img: req.body[i].img,
        description: req.body[i].description,
      });
      await pizaa.save();
    }
    res.status(200).json({ Data: "yaa its stored" });
  }
  if (req.method === "GET") {
    await db.connect();
    const data = await PizzaData.find();
    res.status(200).json({ data });
  }
  res.status(200).json({ Data: "its running" });
  db.disconnect();
}
