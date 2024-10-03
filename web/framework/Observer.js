"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
const config_1 = require("~/common/config");
const main_1 = require("~/main");
class Observer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
    }
    /**
     * stop moving
     */
    stop() {
        this.vx = 0;
        this.vy = 0;
    }
    moveTo(nx, ny) {
        const mx = main_1.gameMap.view.relativeX(nx);
        const my = main_1.gameMap.view.relativeY(ny);
        const ox = main_1.gameMap.view.relativeX(this.x);
        const oy = main_1.gameMap.view.relativeY(this.y);
        const xc = mx - ox;
        const yc = my - oy;
        const hyp = Math.sqrt(xc * xc + yc * yc);
        const ratio = config_1.SPEED * main_1.gameMap.scale / hyp;
        this.vx = xc * ratio;
        this.vy = yc * ratio;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        main_1.gameMap.limit(this);
    }
}
exports.Observer = Observer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBd0M7QUFDeEMsaUNBQWlDO0FBU2pDLE1BQWEsUUFBUTtJQUluQixZQUNTLENBQVMsRUFDVCxDQUFTO1FBRFQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFMVixPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsT0FBRSxHQUFXLENBQUMsQ0FBQztJQUtuQixDQUFDO0lBRUw7O09BRUc7SUFDSSxJQUFJO1FBQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBVSxFQUFFLEVBQVU7UUFDbEMsTUFBTSxFQUFFLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sRUFBRSxHQUFHLGNBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLEVBQUUsR0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxHQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxjQUFLLEdBQUcsY0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEIsY0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFwQ0QsNEJBb0NDIn0=