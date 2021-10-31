import goods from "../models/goods.js";

class Goods {
  async create(req, res) {
    try {
      const { name, amount } = req.body;
      const good = await goods.create({ name, amount });
      return res.json(good);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const goodsAll = await goods.find({});
      return res.json(goodsAll);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          detail: {
            id: "Id not defiend.",
          },
        });
      }
      const good = await goods.findById(id);
      return res.json(good);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const good = await goods.findByIdAndRemove(id);
      return res.json(good);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new Goods();
