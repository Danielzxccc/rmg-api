const client = require("../../config/db");
const ErrorHandler = require("../../helpers/errorHandler");

class BaseService {
  constructor(collection) {
    this.collection = collection;
  }

  async save(object) {
    try {
      const data = await client(this.collection).insert(object).returning("*");
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findAll() {
    try {
      const data = await client(this.collection);
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findOne(id) {
    try {
      const data = await client(this.collection).where({ id: id });
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findMany(options = {}) {
    try {
      const data = await client(this.collection).where(options);
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async update(id, object) {
    try {
      const data = await client(this.collection)
        .where({ id: id })
        .update(object)
        .returning("*");

      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async delete(id) {
    try {
      const data = await client(this.collection)
        .where({ id: id })
        .del()
        .returning("*");
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }
}

module.exports = BaseService;
