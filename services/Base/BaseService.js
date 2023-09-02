const ErrorHandler = require("../../helpers/errorHandler");

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

  async findMany({ options, offset, limit, search, fields }) {
    try {
      let query = this.client(this.collection);
      const data = await query.modify((queryBuilder) => {
        if (options) queryBuilder.where(options);
        if (!search) {
          return queryBuilder.offset(offset).limit(limit);
        }

        fields.forEach((field) => {
          if (field.type === "text") {
            queryBuilder.orWhereILike(field.column, `%${search}%`);
          } else {
            queryBuilder.orWhereRaw(
              `CAST(${field.column} AS TEXT) ILIKE ?`,
              `%${search}%`
            );
          }
        });
        queryBuilder.offset(offset).limit(limit);
      });

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
