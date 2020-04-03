'use strict';

const BaseController = require('../core/BaseController');

class SwordController extends BaseController {
	constructor(model) {
		super(model);
		this.service = this.ctx.service.sword; // 传入当前service
	}
}

module.exports = SwordController;
