'use strict';

const storage = require('../src/lib/storage/data-store.js');
const uuid = require('uuid/v1');

class Foods {

  constructor(config) {

    this.title = uuid();
    this.createdOn = new Date();
    this.id = config && config.title || '';
    this.content = config && config.content || '';
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

module.exports = Foods;