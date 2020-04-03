'use strict';

module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;
	const SwordSchema = new Schema({
		sword: { //剑
			type: String,
			required: true
		},
		title: { // 标题
			type: String,
			required: true
		},
		user: { // 用户
			type: Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
		state: {  //状态： 1:已发布, 2:已撤销
			type: Number,
			default: 1
		},
		reads: { //阅读数
			type: Number,
			default: 0
		},
		collections: {  //收藏数
			type: Number,
			default: 0
		},
		praises: { //点赞数
			type: Number,
			default: 0
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
	return mongoose.model('Sword', SwordSchema);
};
