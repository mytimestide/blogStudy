'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    const { ctx } = this;
    let result = await this.app.get('blog_content',{});
    console.log(result);
    ctx.body = '<h1>2324324</h1>'
  }
}

module.exports = HomeController;
