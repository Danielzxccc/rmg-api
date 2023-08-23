const getSearchableFields = require("../helpers/getSearchableFields");

const transactionSchema = {
  customer_name: { notEmpty: true, isString: true },
  travel_startdate: { notEmpty: true, toDate: true },
  travel_enddate: { notEmpty: true, toDate: true },
  startpoint: { notEmpty: true, isString: true },
  endpoint: { notEmpty: true, isString: true },
  pax: { notEmpty: true, toInt: true, isInt: true },
  amount: { notEmpty: true, isInt: true },
  gas_fee: { notEmpty: true, isInt: true },
  driver_fee: { notEmpty: true, isInt: true },
  maintenance_fee: { notEmpty: true, isInt: true },
};

const transactionFields = getSearchableFields(transactionSchema);

module.exports = { transactionSchema, transactionFields };
