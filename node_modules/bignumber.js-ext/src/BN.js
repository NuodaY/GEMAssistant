const BigNumber = require('bignumber.js')

// 加法
BigNumber.prototype.add = BigNumber.prototype.plus;

// 减法
BigNumber.prototype.sub = BigNumber.prototype.minus;

// 乘法
BigNumber.prototype.mul = BigNumber.prototype.multipliedBy;

// 除法
BigNumber.prototype.div = BigNumber.prototype.dividedBy;

// 大于
BigNumber.prototype.gt = BigNumber.prototype.isGreaterThan;

// 大于等于
BigNumber.prototype.gte = BigNumber.prototype.isGreaterThanOrEqualTo;

// 小于
BigNumber.prototype.lt = BigNumber.prototype.isLessThan;

// 小于等于
BigNumber.prototype.lte = BigNumber.prototype.isLessThanOrEqualTo;

// 取反
BigNumber.prototype.neg = BigNumber.prototype.negated;

// 取绝对值
BigNumber.prototype.abs = BigNumber.prototype.absoluteValue;

// 取整
BigNumber.prototype.int = BigNumber.prototype.integerValue;

// 格式化
BigNumber.prototype.fmt = BigNumber.prototype.toFormat;

// isNaN
// BigNumber.prototype.isNaN

// isZero
// BigNumber.prototype.isZero;

// 指数运算
// BigNumber.prototype.pow


module.exports = BigNumber
