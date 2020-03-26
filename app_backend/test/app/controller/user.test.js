'use strict';
const {app} = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {

	it('should status 200 and get the request body', () => {
		app.mockCsrf();
		app.mockService('user', 'create', () => {
			return {
				username: 'lin_test',
				password: '123456'
			}
		});
		return app.httpRequest()
			.post('/api/user')
			.type('form')
			.send({
				username: 'lin_test',
				password: '123456'
			})
			.expect(200);
	});

	it('should DELETE /api/user', () => {
		app.mockCsrf();
		app.mockService('user', 'deleteById', () => {
			return {
				username: 'lin_test',
				password: '123456'
			}
		});
		return app.httpRequest()
			.delete('/api/user/5e7c47de5fef59620cbed1c6')
			.expect(200);
	});

	it('should GET index /api/user', () => {
		app.mockCsrf();
		return app.httpRequest()
			.get('/api/user')
			.expect(200);
	});

	it('should GET one /api/user', () => {
		app.mockCsrf();
		app.mockService('user', 'findById', () => {
			return {
				username: 'lin_test',
				password: '123456'
			}
		});
		return app.httpRequest()
			.get('/api/user/5e7bfd845bdbde5d7c4e')
			.expect(200);
	});


});
