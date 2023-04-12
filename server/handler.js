const { Cars } = require("../models");

const indexLayout = require("../controllers/indexLayout");
const getCreate = require("../controllers/create");
const getUpdate = require("../controllers/update");

const deleteCar = require("../controllers/delete");

const showIndexLayout = indexLayout;
const showCreateLayout = getCreate.createLayout;

const showupdateLayout = getUpdate.updateLayout;
const updateById = getUpdate.updateById;

const createCar = getCreate.createCars;

const processUpdating = getUpdate.update;
const processDeleting = deleteCar;

module.exports = {
  showIndexLayout,
  showCreateLayout,
  updateById,
  showupdateLayout,
  createCar,
  processUpdating,
  processDeleting,
};
