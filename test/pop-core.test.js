'use strict';

const mock = require('egg-mock');

describe('test/pop-core.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/pop-core-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, popCore')
      .expect(200);
  });
});
