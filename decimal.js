define(["require", "exports"], function (require, exports) {
    "use strict";
    var _this = this;
    var checkAndFormat = function (input, operation) {
        if (_this.p !== input.p)
            throw "p must be equal to " + operation + " two numbers";
        return (typeof (input) === 'number') ? new Decimal(_this.p, input) : input;
    };
    var compare = 'compare';
    var Decimal = (function () {
        function Decimal(prec, val) {
            var _this = this;
            this.plus = function (right) {
                return new Decimal(_this.p, _this.v + checkAndFormat(right, 'add').v);
            };
            this.minus = function (right) {
                return new Decimal(_this.p, _this.v - checkAndFormat(right, 'subtract').v);
            };
            this.times = function (right) {
                return new Decimal(_this.p, _this.v * checkAndFormat(right, 'multiply').v);
            };
            this.dividedBy = function (right) {
                return new Decimal(_this.p, _this.v / checkAndFormat(right, 'divide').v);
            };
            this.equals = function (right) {
                return _this.v === checkAndFormat(right, compare).v;
            };
            this.greaterThan = function (right) {
                return _this.v > checkAndFormat(right, compare).v;
            };
            this.lessThan = function (right) {
                return _this.v < checkAndFormat(right, compare).v;
            };
            this.greaterThanOrEqual = function (right) {
                return _this.v >= checkAndFormat(right, compare).v;
            };
            this.lessThanOrEqual = function (right) {
                return _this.v <= checkAndFormat(right, compare).v;
            };
            this.notEqual = function (right) {
                return !_this.equals(right);
            };
            this.toFixed = function () {
                return toNumber().toFixed(_this.p);
            };
            this.toNumber = function () {
                return (_this.v / Math.pow(10, _this.p));
                ;
            };
            this.v = Math.round(val * Math.pow(10, prec));
            this.p = prec;
        }
        return Decimal;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Decimal;
});
