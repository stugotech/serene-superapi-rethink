
import {Resource, QueryStringParser} from 'super-api-js';


export default class RethinkHandler {
  constructor(db, options) {
    this.db = db;
    this.options = options;
  }

  handle(request, response) {
    let tableName = (request.resource ? request.resource.table : null)
      || request.resourceName;

    request.table = this.db.table(tableName);
    request.query = new QueryStringParser(request.query, this.options);
    return this[request.operation](request, response);
  }


  list(request, response) {

  }


  get(request, response) {

  }


  create(request, response) {

  }


  update(request, response) {

  }


  replace(request, response) {

  }


  delete(request, response) {

  }
};
