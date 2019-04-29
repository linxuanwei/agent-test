'use strict';

const mock = require('egg-mock');

describe('test/abc.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/abc-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, abc')
      .expect(200);
  });
});
