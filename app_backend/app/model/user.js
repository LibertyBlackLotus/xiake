'use strict';

module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;
	const UserSchema = new Schema({
		username: { // 用户名
			type: String,
			required: true,
		},
		password: { // 密码
			type: String,
			required: true,
		},
		create_time: { // 创建时间
			type: Date,
			default: Date.now,
		},
		update_time: { // 修改时间
			type: Date,
			default: Date.now,
		},
	}, {
		versionKey: false,
		timestamps: {createdAt: 'create_time', updatedAt: 'update_time'},
	});
	return mongoose.model('User', UserSchema);
};
