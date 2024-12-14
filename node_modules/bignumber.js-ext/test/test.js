const BN = require('../src/BN')
var assert = require('assert');


describe('Test bignumberjs-ext',()=> {
    beforeEach(()=> {
        this.x = 4
        this.y = 5
    })

    // 加法
    it('add',()=> {
        assert.equal(BN(this.x).add(this.y).toString(10),'9')
        assert.equal(BN(this.x).add(this.y).toNumber(10),9)
    })

    // 减法
    it('sub',()=> {
        assert.equal(BN(this.x).sub(this.y).toString(10),'-1')
        assert.equal(BN(this.x).sub(this.y).toNumber(10),-1)
    })

    // 乘法
    it('mul',()=> {
        assert.equal(BN(this.x).mul(this.y).toString(10),'20')
        assert.equal(BN(this.x).mul(this.y).toNumber(10),20)
    })

    // 除法
    it('div',()=> {
        assert.equal(BN(this.x).div(this.y).toString(10),'0.8')
        assert.equal(BN(this.x).div(this.y).toNumber(10),0.8)
    })

    // 大于
    it('gt',()=> {
        assert.equal(BN(this.x).gt(this.y),false)
        assert.equal(BN(this.y).gt(this.x),true)
    })

    // 大于或等于
    it('gte',()=> {
        assert.equal(BN(this.x).gte(this.y),false)
        assert.equal(BN(this.y).gte(this.x),true)
        assert.equal(BN(this.x).gte(4),true)
    })

    // 小于
    it('lt',()=> {
        assert.equal(BN(this.x).lt(this.y),true)
        assert.equal(BN(this.y).lt(this.x),false)
    })

    // 小于
    it('lte',()=> {
        assert.equal(BN(this.x).lte(this.y),true)
        assert.equal(BN(this.y).lte(this.x),false)
        assert.equal(BN(this.x).lte(4),true)
    })

    // 取反
    it('neg',()=> {
        assert.equal(BN(this.x).sub(this.y).toString(10),'-1')
        assert.equal(BN(this.x).sub(this.y).neg().toString(10),'1')
    })

    // 取绝对值
    it('abs',()=> {
        assert.equal(BN(this.x).sub(this.y).toString(10),'-1')
        assert.equal(BN(this.x).sub(this.y).abs().toString(10),'1')
    })

    // 取整
    it('int',()=> {
        assert.equal(BN(12.5).div(5).toString(10),'2.5')
        assert.equal(BN(12.5).div(5).int().toString(10),'3')
        // 向下取整
        assert.equal(BN(12.5).div(5).int(BN.ROUND_DOWN).toString(10),'2')
        // 向上取整
        assert.equal(BN(12.5).div(5).int(BN.ROUND_UP).toString(10),'3')
    })

    // 是否为NaN
    it('isNaN',()=> {
        assert.equal(BN(NaN).isNaN(),true)
        assert.equal(BN(0).isNaN(),false)
    })

    // 是否为0
    it('isZero',()=> {
        assert.equal(BN(NaN).isZero(),false)
        assert.equal(BN(5).isZero(),false)
        assert.equal(BN(0).isZero(),true)
    })

    // 指数运算
    it('pow',()=> {
        // 2 ** 3
        assert.equal(BN(2).pow(3).toString(10),'8')
        // 3 ** 3
        assert.equal(BN(3).pow(3).toString(10),'27')
    })

    // 截取
    it('toFixed',()=> {
        assert.equal(BN(12.58).div(5).toString(10),'2.516')
        assert.equal(BN(12.58).div(5).toFixed(1).toString(10),'2.5')
        assert.equal(BN(12.58).div(5).toFixed(2).toString(10),'2.52')
    })

    // 格式化
    it('fmt',()=> {
        assert.equal(BN('123456789.123456789').fmt(),'123,456,789.123456789')
        assert.equal(BN('123456789.123456789').fmt(1),'123,456,789.1')
    })
})