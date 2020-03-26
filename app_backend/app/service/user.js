'use strict';
const BaseService = require('../core/BaseService');

class UserService extends BaseService {
	constructor(model) {
		super(model);
		this.model = this.ctx.model.User; // 传入当前model
	}
}

module.exports = UserService;
