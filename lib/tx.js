'use strict';
const { v1: uuidv1 } = require('uuid');
// console.log(uuidv1() + "-------------")

class Tx {
    constructor(ctx) {
        this.ctx = ctx;
        this.session = undefined;
        this.sid = undefined;
    }

    async start() {
        this.session = await this.createSession();
        this.sid = uuidv1();
        // console.log(this.sid)
        this.ctx.logger.debug(`[egg-tx] 启动事务-sid：${this.sid}`);
    }

    async createSession() {
        throw new Error('not implement');
    }

    async rollback() {
        throw new Error('not implement');
    }

    async commit() {
        throw new Error('not implement');
    }

}

module.exports = Tx;
