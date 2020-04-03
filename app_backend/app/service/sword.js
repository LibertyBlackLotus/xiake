'use strict';
const BaseService = require('../core/BaseService');

class SwordService extends BaseService {
	constructor(model) {
		super(model);
		this.model = this.ctx.model.Sword; // 传入当前model
	}
}

module.exports = SwordService;
