"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const main_1 = require("~/main");
const Base_1 = require("./Base");
class Food extends Base_1.Base {
    constructor(options) {
        super(options);
        this.lightDirection = true;
        this.point = options.point;
        this.lightSize = this.width / 2;
    }
    action() {
        if (!this.visible) {
            return;
        }
        const lightSpeed = 1;
        this.lightSize += this.lightDirection ? lightSpeed : -lightSpeed;
        // light animate
        if (this.lightSize > this.width || this.lightSize < this.width / 2) {
            this.lightDirection = !this.lightDirection;
        }
    }
    render() {
        if (!this.visible) {
            return;
        }
        main_1.gameMap.ctx.fillStyle = '#fff';
        // draw light
        main_1.gameMap.ctx.globalAlpha = 0.2;
        main_1.gameMap.ctx.beginPath();
        main_1.gameMap.ctx.arc(this.paintX, this.paintY, this.lightSize * this.paintWidth / this.width, 0, Math.PI * 2);
        main_1.gameMap.ctx.fill();
        main_1.gameMap.ctx.globalAlpha = 1;
        main_1.gameMap.ctx.beginPath();
        main_1.gameMap.ctx.arc(this.paintX, this.paintY, this.paintWidth / 2, 0, Math.PI * 2);
        main_1.gameMap.ctx.fill();
    }
}
exports.Food = Food;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBQ2pDLGlDQUEyQztBQU0zQyxNQUFhLElBQUssU0FBUSxXQUFJO0lBSzVCLFlBQVksT0FBb0I7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSFYsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFLcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUVqRSxnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsT0FBTztRQUNULENBQUM7UUFFRCxjQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFL0IsYUFBYTtRQUNiLGNBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixjQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLGNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNiLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNmLENBQUM7UUFDRixjQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5CLGNBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUM1QixjQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLGNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRSxjQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWxERCxvQkFrREMifQ==