"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsertt('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 1,
        url: "https://www.mindat.org/imagecache/aa/6d/06855920014952932944130.jpg",
        product_name: "Quartz",
        description: "Formed 7 km under the surface, taken from Kiriath-Arba",
        price: 300000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 2,
        url: "https://www.mindat.org/imagecache/4b/59/07697720014977152813145.jpg",
        product_name: "Labradorite (Plagioclase feldspar)",
        description: "Formed 10 km under the surface, taken from Kiriath-Arba",
        price: 500000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 3,
        url: "https://www.mindat.org/imagecache/8b/bf/07840180014948361215664.jpg",
        product_name: "Biotite",
        description: "Formed 7 km under the surface, taken from Kiriath-Arba",
        price: 200000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 4,
        url: "https://www.mindat.org/imagecache/d5/4a/09939630014953454985016.jpg",
        product_name: "Calcite",
        description: "Formed 1 km under the surface, taken from Kiriath-Arba",
        price: 100000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 5,
        url: "https://www.mindat.org/imagecache/18/d1/02900780014946252048428.jpg",
        product_name: "Albite",
        description: "Formed 4 km under the surface, taken from Kiriath-Arba",
        price: 250000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 6,
        url: "https://www.mindat.org/imagecache/11/7a/04766080014946246016426.jpg",
        product_name: "Amazonite",
        description: "Formed 1 km under the surface, taken from Kiriath-Arba",
        price: 1200000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 7,
        url: "https://www.mindat.org/imagecache/28/36/03811620014946258475301.jpg",
        product_name: "Sanidine",
        description: "Formed 5 km under the surface, taken from Kiriath-Arba",
        price: 500000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 8,
        url: "https://www.mindat.org/imagecache/ed/0f/02003130014946687832016.jpg",
        product_name: "Hyalophane",
        description: "Formed 3 km under the surface, taken from Kiriath-Arba",
        price: 500000,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        id: 9,
        url: "https://www.mindat.org/imagecache/07/35/08907260014946249538421.jpg",
        product_name: "Wulfenite",
        description:
          "Red Cloud Mine, Silver Mining District, La Paz County, Arizona, USA",
        price: 999999,
        userid: 1,
      },
    ]);
    await queryInterface.bulkInsert("Products", [
      {
        stock: 1,
        createdAt: Sequelize.fn("Now"),
        updatedAt: Sequelize.fn("Now"),
        url: "https://www.mindat.org/imagecache/b8/29/09475240014977334475671.jpg",
        product_name: "Wulfenite",
        description:
          "Barranco del Humo mines, Albuñuelas, Granada, Andalusia, Spain",
        price: 1888888,
        id: 10,
        userid: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
