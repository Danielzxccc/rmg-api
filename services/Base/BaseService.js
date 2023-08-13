const ErrorHandler = require("../../helpers/errorHandler");
const client = require("../../config/db");
class BaseService {
  constructor(collection, database) {
    this.collection = collection;
    this.client = database;
  }

  async save(object) {
    try {
      const data = await this.client(this.collection)
        .insert(object)
        .returning("*");
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findAll() {
    try {
      const data = await this.client(this.collection);
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findOne(id) {
    try {
      const data = await this.client(this.collection).where({ id });
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async findMany(options = {}) {
    try {
      const data = await this.client(this.collection).where(options);
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }

  async update(id, object) {
    try {
      const data = await this.client(this.collection)
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
      const data = await this.client(this.collection)
        .where({ id })
        .del()
        .returning("*");
      return data;
    } catch (error) {
      throw new ErrorHandler(error.message || "", 500);
    }
  }
}

module.exports = BaseService;