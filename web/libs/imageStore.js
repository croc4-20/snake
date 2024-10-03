"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnakeHeader = getSnakeHeader;
// get image of snake header
function getSnakeHeader(width, height) {
    const img = document.createElement('canvas');
    const ctx = img.getContext('2d');
    const dis = 2;
    img.width = width + dis * 2;
    img.height = height + dis * 2;
    const eyeRadius = width * 0.2;
    function drawEye(eyeX, eyeY) {
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.arc(eyeX, eyeY, eyeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // eyehole
        ctx.beginPath();
        ctx.fillStyle = '#000';
        ctx.arc(eyeX, eyeY - eyeRadius / 2, eyeRadius / 4, 0, Math.PI * 2);
        ctx.fill();
    }
    // left eye
    drawEye(img.width / 2 - width / 2 + eyeRadius, img.height / 2 - height / 2 + eyeRadius);
    // right eye
    drawEye(img.width / 2 + width / 2 - eyeRadius, img.height / 2 - height / 2 + eyeRadius);
    return img;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3Q0F5Q0M7QUExQ0QsNEJBQTRCO0FBQzVCLFNBQWdCLGNBQWMsQ0FDNUIsS0FBYSxFQUNiLE1BQWM7SUFFZCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDbEMsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDO0lBRXRCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUU5QixNQUFNLFNBQVMsR0FBVyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBRXRDLFNBQVMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZO1FBQ3pDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUViLFVBQVU7UUFDVixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztJQUNYLE9BQU8sQ0FDTCxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFDckMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQ3hDLENBQUM7SUFFRixZQUFZO0lBQ1osT0FBTyxDQUNMLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FDeEMsQ0FBQztJQUVGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyJ9