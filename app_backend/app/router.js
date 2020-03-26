'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {router, controller, jwt } = app;
	router.post('user', '/api/user/login', controller.user.login);  // 用户登录
	router.put('/api/user/:id', jwt, controller.user.update);       // 修改用户信息
	router.resources('user', '/api/user', controller.user);         // 用户
};
