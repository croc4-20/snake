"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
// 视窗
class View {
    constructor(gameMap, width, height, x = 0, y = 0) {
        this.gameMap = gameMap;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    trace(obj) {
        this.x = (obj.x / this.gameMap.scale) - this.width / 2;
        this.y = (obj.y / this.gameMap.scale) - this.height / 2;
    }
    absoluteX(x) {
        return (x + this.x) * this.gameMap.scale;
    }
    absoluteY(y) {
        return (y + this.y) * this.gameMap.scale;
    }
    relativeX(x) {
        return (x / this.gameMap.scale) - this.x;
    }
    relativeY(y) {
        return (y / this.gameMap.scale) - this.y;
    }
    relativeW(width) {
        return width / this.gameMap.scale;
    }
    relativeH(height) {
        return height / this.gameMap.scale;
    }
}
exports.View = View;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0EsS0FBSztBQUNMLE1BQWEsSUFBSTtJQUNmLFlBQ1MsT0FBZ0IsRUFDaEIsS0FBYSxFQUNiLE1BQWMsRUFDZCxJQUFZLENBQUMsRUFDYixJQUFZLENBQUM7UUFKYixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUNiLE1BQUMsR0FBRCxDQUFDLENBQVk7SUFDbEIsQ0FBQztJQUVFLEtBQUssQ0FBQyxHQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxDQUFTO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFFTSxTQUFTLENBQUMsQ0FBUztRQUN4QixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRU0sU0FBUyxDQUFDLENBQVM7UUFDeEIsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLFNBQVMsQ0FBQyxDQUFTO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQWM7UUFDN0IsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBckNELG9CQXFDQyJ9