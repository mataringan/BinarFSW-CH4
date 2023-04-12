const indexLayout = require("../controllers/indexLayout");
const getCreate = require("../controllers/create");
const getUpdate = require("../controllers/update");
const deleteCar = require("../controllers/delete");
const listCars = require("../controllers/listCars");
const carById = require("../controllers/carId");

const showIndexLayout = indexLayout;
const showCreateLayout = getCreate.createLayout;
const createCar = getCreate.createCars;

const showupdateLayout = getUpdate.updateLayout;
const updateById = getUpdate.updateById;

const processUpdating = getUpdate.update;
const processDeleting = deleteCar;

const listCar = listCars;
const getCarById = carById;

module.exports = {
  showIndexLayout,
  showCreateLayout,
  updateById,
  showupdateLayout,
  createCar,
  processUpdating,
  processDeleting,
  listCar,
  getCarById,
};
