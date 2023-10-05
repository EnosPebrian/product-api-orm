const db = require("../models");

const productControllers = {
  getAll(req, res) {
    db.Product.findAll({ logging: false, order: [["createdAt", "DESC"]] })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  getById(req, res) {
    const { id } = req.params;
    db.Product.findByPk(id, { logging: false })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  getByProductName(req, res) {
    const { product_name } = req.query;
    db.Product.findAll({
      order: [["createdAt", "DESC"]],
      logging: false,
      where: {
        product_name: {
          [db.Sequelize.Op.like]: `%${product_name}%`,
        },
      },
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  createProduct(req, res) {
    db.Product.create({ ...req.body }, { logging: false })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  updateProduct(req, res) {
    const { id } = req.params;
    db.Product.update({ ...req.body }, { where: { id }, logging: false })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  deleteProduct(req, res) {
    const { id } = req.params;
    db.Product.destroy({ where: { id }, logging: false })
      .then((result) =>
        res.send({ message: `product id ${id} berhasil dihapus` })
      )
      .catch((err) => res.status(500).send(err?.message));
  },
  getAllProductsWithUser(req, res) {
    db.Product.findAll({
      include: { model: db.User, as: "user" },
      logging: false,
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  getUsersWithAllProducts(req, res) {
    db.User.findAll({
      include: { model: db.Product, as: "product" },
      logging: false,
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  async createUserAndProduce(req, res) {
    try {
      const result = await db.sequelize.transaction(async (t) => {
        const newUser = await db.User.create(
          { ...req.body.user },
          { logging: false, transaction: t }
        );
        await db.Product.create({ ...req.body.product }, { transaction: t });
        return res.send({ message: "user and product berhasil dibuat" });
      });
    } catch (err) {
      res.status(500).send(err?.message);
    }
  },
};
module.exports = productControllers;
