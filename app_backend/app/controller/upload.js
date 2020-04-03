'use strict';

const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
const pump = require('mz-modules/pump');
const utils = require('../utils/index');

class UploadController extends Controller {
	/**
	 * 上传文件 stream模式
	 * @returns {Promise.<void>}
	 */
	async uploadStream(){
		const { ctx } = this;
		// file not exists will response 400 error
		const stream = await ctx.getFileStream();
		const date = new Date();
		const year = date.getFullYear();
		const month = (Array(2).join(0) + (date.getMonth() + 1)).slice(-2);
		const uploadPath = `/img/${year}/${month}`;
		const uploadPathAb = path.join(this.app.config.publicDir, uploadPath);
		utils.mkdirsSync(uploadPathAb);

		const serviceFileName = utils.uuid() + stream.filename;
		const target = path.join(uploadPathAb, serviceFileName);
		const writeStream = fs.createWriteStream(target);
		await pump(stream, writeStream);
		const fileUrl = this.app.config.imgURL + uploadPath + '/' + serviceFileName;
		console.log('---fileUrl---->', fileUrl);
		ctx.body = {
			url: fileUrl
		};
	}

	/**
	 * 上传文件  file模式
	 * @returns {Promise.<void>}
	 */
	async uploadFile(){
		const { ctx } = this;
		const file = ctx.request.files[0];
		const name = 'egg-multipart-test/' + path.basename(file.filename);
		let result;
		try {
			// process file or upload to cloud storage
			result = await ctx.oss.put(name, file.filepath);
		} finally {
			// remove tmp files and don't block the request's response
			// cleanupRequestFiles won't throw error even remove file io error happen
			ctx.cleanupRequestFiles();
			// remove tmp files before send response
			// await ctx.cleanupRequestFiles();
		}

		ctx.body = {
			url: result.url,
			// get all field values
			requestBody: ctx.request.body,
		};
	}
}

module.exports = UploadController;
