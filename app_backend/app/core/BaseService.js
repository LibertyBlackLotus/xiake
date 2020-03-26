'use strict';

const Service = require('egg').Service;

class BaseService extends Service {

	model  //当前数据库模型

	/**
	 * 查询
	 * @param {Object} option 查询参数
	 * @param {Array} includs 返回数据包含字段数组，为空返回全部字段
	 * @return {Array} 查询结果
	 */
	async find(option = {}, includs = []) {
		const projection = {};
		if (includs && includs instanceof Array) {
			includs.forEach(item => {
				projection[item] = 1;
			});
		}
		return await this.model.find(option, projection).sort({create_time: -1});
	}

	/**
	 * 按id查询
	 * @param {Object} _id 查询id
	 * @param {Array} includs 返回数据包含字段数组，为空返回全部字段
	 * @return {} 查询结果
	 */
	async findById(_id = 0, includs = []) {
		return await this.model.findOne({ _id }, includs);
	}

	/**
	 * 条件查询 一条
	 * @param {Object} option 查询参数
	 * @param {Array} includs 返回数据包含字段数组，为空返回全部字段
	 * @return {} 查询结果
	 */
	async findOne(option = {}, includs = []) {
		const projection = {};
		if (includs && includs instanceof Array) {
			includs.forEach(item => {
				projection[item] = 1;
			});
		}
		return await this.model.findOne(option, projection);
	}

	/**
	 * 创建
	 * @param {Object} data 创建数据
	 * @return {} 结果
	 */
	async create(data = {}) {
		const instance = new this.model(data);
		return await instance.save();
	}

	/**
	 * 按id更新一条
	 * @param {Object} _id 更新id
	 * @param {Object} data 更新数据
	 * @return {} 结果
	 */
	async updateById(_id = 0, data = {}) {
		return await this.model.findOneAndUpdate({_id}, data);
	}

	/**
	 * 条件更新
	 * @param {Object} option 更新条件
	 * @param {Object} data 更新数据
	 * @return {Array} 结果
	 */
	async update(option = {}, data = {}) {
		return await this.model.updateMany(option, data);
	}

	/**
	 * 按id删除
	 * @param {Object} _id 数据id
	 * @return {} 结果
	 */
	async deleteById(_id = 0) {
		return await this.model.findOneAndRemove({_id});
	}

	/**
	 * 条件删除
	 * @param {Object} condition 删除条件
	 * @return {} 结果
	 */
	async delete(condition = {}) {
		return await this.model.deleteMany(condition);
	}
}

module.exports = BaseService;