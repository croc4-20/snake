export class SmallMap {
    constructor(gameMap, margin, radius) {
        this.gameMap = gameMap;
        this.margin = margin;
        this.radius = radius;
        this.image = document.createElement('canvas');
        this.initImage();
    }
    initImage() {
        this.image.width = this.radius * 2;
        this.image.height = this.radius * 2;
        this.x = this.gameMap.view.width - this.radius * 2 - this.margin;
        this.y = this.gameMap.view.height - this.radius * 2 - this.margin;
        this.mapX = this.x + this.radius / 2;
        this.mapY = this.y + this.radius / 2;
        const ctx = this.image.getContext('2d');
        this.smallMapWid = this.gameMap.width > this.gameMap.height
            ? this.radius
            : (this.gameMap.width * this.radius / this.gameMap.height);
        this.smallMapHei = this.gameMap.width > this.gameMap.height
            ? (this.gameMap.height * this.radius / this.gameMap.width)
            : this.radius;
        const smallRectX = this.radius - this.smallMapWid / 2;
        const smallRectY = this.radius - this.smallMapHei / 2;
        // draw background
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.radius, this.radius, this.radius - 1, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        // draw map
        ctx.fillStyle = '#ccc';
        ctx.fillRect(smallRectX, smallRectY, this.smallMapWid, this.smallMapHei);
        ctx.restore();
    }
    render() {
        // relative ratio
        const radio = this.smallMapWid / this.gameMap.paintWidth;
        const ctx = this.gameMap.ctx;
        // area and position of window
        const smallViewX = this.gameMap.view.x * radio + this.mapX;
        const smallViewY = this.gameMap.view.y * radio + this.mapY;
        const smallViewW = this.gameMap.view.width * radio;
        const smallViewH = this.gameMap.view.height * radio;
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.drawImage(this.image, this.x, this.y);
        // draw window
        // ctx.strokeStyle = '#fff';
        // ctx.strokeRect(smallViewX, smallViewY, smallViewW, smallViewH);
        ctx.fillStyle = '#f00';
        ctx.fillRect(smallViewX + smallViewW / 2 - 2, smallViewY + smallViewH / 2 - 2, 4, 4);
        ctx.restore();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU21hbGxNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93ZWIvZnJhbWV3b3JrL1NtYWxsTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxRQUFRO0lBU25CLFlBQ1MsT0FBZ0IsRUFDZixNQUFjLEVBQ2QsTUFBYztRQUZmLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhoQixVQUFLLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFZaEUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUVoQixTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3pELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXRELGtCQUFrQjtRQUNsQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkUsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVgsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDekIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsV0FBVztRQUNYLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU07UUFDWCxpQkFBaUI7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN6RCxNQUFNLEdBQUcsR0FBNkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFdkQsOEJBQThCO1FBQzlCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQyxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLGtFQUFrRTtRQUNsRSxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsUUFBUSxDQUNWLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ2hFLENBQUMsRUFBRSxDQUFDLENBQ0wsQ0FBQztRQUVGLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0YifQ==