function getSearchableFields(schema) {
  return Object.entries(schema)
    .filter(([_, validators]) => {
      return (
        (validators.isString || validators.isInt || validators.toDate) &&
        (validators.isString || validators.isInt || validators.toDate)
      );
    })
    .map(([fieldName, validators]) => {
      if (validators.isString) {
        return { column: fieldName, type: "text" };
      } else if (validators.isInt) {
        return { column: fieldName, type: "integer" };
      } else if (validators.toDate) {
        return { column: fieldName, type: "date" };
      }
    });
}

module.exports = getSearchableFields;
