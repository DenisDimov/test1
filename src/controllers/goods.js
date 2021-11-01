import goods from "../models/goods.js";

class Goods {
  async create(req, res) {
    try {
      const { name, amount } = req.body;
      const good = await goods.create({ name, amount });
      return res.json(good);
    } catch (e) {
      res.status(500).json({
        detail: {
          error: "Server error",
        },
      });
    }
  }

  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const goodsAll = await goods
        .find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);
      const count = await goods.countDocuments();
      return res.json({ goodsAll, totalPages: Math.ceil(count / limit), currentPage: page });
    } catch (e) {
      res.status(500).json({
        detail: {
          error: "Server error",
        },
      });
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
      res.status(500).json({
        detail: {
          error: "Server error",
        },
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const good = await goods.findByIdAndRemove(id);
      return res.json(good);
    } catch (e) {
      res.status(500).json({
        detail: {
          error: "Server error",
        },
      });
    }
  }
}

export default new Goods();
