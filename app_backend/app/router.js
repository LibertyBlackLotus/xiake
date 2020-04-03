'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {router, controller, jwt } = app;
	router.post('user', '/api/user/login', controller.user.login);  // 用户登录
	router.put('/api/user/:id', jwt, controller.user.update);       // 修改用户信息
	router.resources('user', '/api/user', controller.user);         // 用户

	// router.post('/api/sword', jwt, controller.sword.create);        // 创建剑
	router.post('/api/sword', controller.sword.create);        // 创建剑
	router.delete('/api/sword/:id', jwt, controller.sword.destroy); // 删除剑
	router.put('/api/sword/:id', jwt, controller.sword.update);     // 修改剑
	router.resources('sword', '/api/sword', controller.sword);      // 剑

	router.post('upload', '/api/upload', controller.upload.uploadStream); // 上传文件

};
