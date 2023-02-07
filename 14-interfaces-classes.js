var Uber = /** @class */ (function () {
    function Uber() {
    }
    Uber.prototype.nearestCab = function () {
        return "vechile number";
    };
    Uber.prototype.distance = function () {
        return Math.sqrt(Math.pow(this.dest[1] - this.src[1], 2) -
            Math.pow(this.dest[0] - this.src[0], 2));
    };
    Uber.prototype.time = function () {
        return 3600;
    };
    return Uber;
}());
var Zomato = /** @class */ (function () {
    function Zomato() {
    }
    Zomato.prototype.nearestDeliveryAgent = function () {
        return "vechile number";
    };
    Zomato.prototype.distance = function () {
        return Math.sqrt(Math.pow(this.dest[1] - this.src[1], 2) -
            Math.pow(this.dest[0] - this.src[0], 2));
    };
    Zomato.prototype.time = function () {
        return 12300;
    };
    return Zomato;
}());
