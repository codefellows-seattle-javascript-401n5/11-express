'use strict';

import superagent from 'superagent';

describe('API module', () => {

  it('Should return ID when given one', () => {

    return superagent.get('http://localhost:3000/api/v1/food?id=hotdog')
      .then(response => {
        expect(response.text).toBe('ID: hotdog was requested');
      });
  });

  it('should respond with not found when an id is not found', () => {

    return superagent.get('http://localhost:3000/api/v1/food?id=badID')
      .catch(err => {
        expect(err.responseText).toBe('not found');
        expect(err.responseStatus).toBe(404);
      });
  });

  it('should return with an error status of 400 when a badID is returned', () => {

    return superagent.get('http://localhost:3000/api/v1/food?id=badID')
      .catch(err => {
        expect(err.responseText).toBe('bad request');
        expect(err.responseStatus).toBe(40);
      });
  })
})