import { body, param } from "express-validator";

const addReligionValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Religion name is required!"),
  ];
};

const updateReligionValidator = () => {
  return [
    param("id").trim().notEmpty().withMessage("Religion id is required!"),
    body("name").trim().notEmpty().withMessage("Religion name is required!"),
  ];
};

const deleteReligionValidator = () => {
  return [
    param("id").trim().notEmpty().withMessage("Religion id is required!"),
    body("name").trim().notEmpty().withMessage("Religion name is required!"),
  ];
};
export {
  addReligionValidator,
  updateReligionValidator,
  deleteReligionValidator,
};
