'use strict';

import superagent from'superagent';

describe('API module', () => {

  xit('Should return hompage when given path', () => {

    return superagent.get('http://localhost:3000/')
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('<!DOCTYPE'));
      });
  });

  xit('Should return ID when given one', () => {
    let obj = {corndog: 'this is a corndog'};
    return superagent.post('http://localhost:3000/api/v1/')
      .send(obj)
      .then(() => {
        return superagent.get('http://localhost:3000/api/v1/corndog')
          .then(response => {
            expect(response.statusCode).toBe(200);
          });
      });
  });

  xit('should return with an error status of 400 when a badID is returned', () => {

    return superagent.get('http://localhost:3000/api/v1/badID')
      .catch(err => {
        // expect(err.responseText).toBe('bad request');
        expect(err.responseStatus).toBe(400);
      });
  })

  it('handles a good post request', (done) => {
    let obj = {title:'corndog',
                content: 'this is a corndog'};
    
     superagent.post('http://localhost:3000/api/v1/food')
      .send(obj)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.text).title).toEqual(obj.title);
        console.log(JSON.parse(response.text).title,'!!!', obj.title);
        done();
      })
      .catch(console.err);
  });
});