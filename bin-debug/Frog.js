var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Frog = (function (_super) {
    __extends(Frog, _super);
    function Frog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gravity = 0.9;
        return _this;
    }
    Frog.prototype.jump = function (velocity) {
        console.log(velocity);
        if (this.y <= this.stage.stageHeight - 100) {
            velocity -= this.gravity;
            this.y -= velocity;
        }
    };
    return Frog;
}(egret.Sprite));
__reflect(Frog.prototype, "Frog");
//# sourceMappingURL=Frog.js.map