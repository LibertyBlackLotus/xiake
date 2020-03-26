'use strict';

/** @type Egg.EggPlugin */
module.exports = {
	valid: {
		enable: true,
		package: 'egg-validate',
	},

	mongoose: {
		enable: true,
		package: 'egg-mongoose',
	},

	jwt: {
		enable: true,
		package: 'egg-jwt'
	}
};
