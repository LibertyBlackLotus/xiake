'use strict';

const { Controller } = require('egg');
const { InvalidQueryError, NotFoundError, ExistError } = require('../core/error');

class BaseController extends Controller {

	service  //当前service

	/**
	 * 获取列表
	 * @returns {Promise.<void>}
	 */
	async index() {
		const {ctx} = this;
		const index = await this.service.find();
		ctx.body = index;
	}

	/**
	 * 创建
	 * @returns {Promise.<void>}
	 */
	async create(unique = {}){
		const { ctx } = this;
		let result = await this.service.findOne(unique);
		if(result){
			throw new ExistError();
		}
		let data = ctx.request.body;
		if(!data){
			throw new InvalidQueryError();
		}
		if(customData){
			data = customData;
		}
		const item = await this.service.create(data);
		if(!item){
			ctx.status = '500';
			ctx.message = '保存失败';
		}else{
			ctx.body = {
				item
			};
		}
	}

	/**
	 * 删除
	 * @returns {Promise.<void>}
	 */
	async destroy(){
		const {ctx} = this;
		const { id } = ctx.params;
		if(!id){
			throw new InvalidQueryError();
		}
		const item = await this.service.deleteById(id);
		if(!item){
			throw new NotFoundError();
		}
		ctx.body = {
			item
		};
	}

	/**
	 * 修改
	 * @returns {Promise.<void>}
	 */
	async update(){
		const {ctx} = this;
		const {id} = ctx.params;
		const data = ctx.request.body;
		if(!id || !data){
			throw new InvalidQueryError();
		}
		const item = await this.service.updateById({_id: id}, data);
		if(!item){
			throw new NotFoundError();
		}
		ctx.body = {
			item
		};
	}

	/**
	 * 查询
	 * @returns {Promise.<void>}
	 */
	async show(){
		const {ctx} = this;
		const { id } = ctx.params;
		if(!id){
			throw new InvalidQueryError();
		}
		const item = await this.service.findById(id);
		if(!item){
			throw new NotFoundError();
		}
		ctx.body = {
			item
		};
	}
}
module.exports = BaseController;

