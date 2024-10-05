"use strict";
/**
 * Created by wanghx on 5/3/16.
 *
 * constant
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_FOOD_COUNT = exports.SYNC_PER_FRAME = exports.SNAKE_IMG_SIZE = exports.TILE_IMG_HEIGHT = exports.TILE_IMG_WIDTH = exports.MAP_RECT_HEIGHT = exports.MAP_RECT_WIDTH = exports.BASE_ANGLE = exports.SPEED = exports.MAP_HEIGHT = exports.MAP_WIDTH = exports.socketPort = exports.devPort = exports.port = exports.CMD_LOSE_CONNECT = exports.CMD_SYNC_OTHER_COORD = exports.CMD_SYNC_MAIN_COORD = exports.CMD_INIT_ACK = exports.CMD_INIT = void 0;
exports.CMD_INIT = 100; // init cmd
exports.CMD_INIT_ACK = 101; // init answer cmd
exports.CMD_SYNC_MAIN_COORD = 102; // sync main coordinates
exports.CMD_SYNC_OTHER_COORD = 103; // sync other coordinates
exports.CMD_LOSE_CONNECT = 104; // lose connection
exports.port = process.env.PORT || 9999; // server port
exports.devPort = exports.port - 1; // development port
exports.socketPort = exports.port - 2; // websocket port
exports.MAP_WIDTH = 5000; // map width
exports.MAP_HEIGHT = 5000; // map height
exports.SPEED = 4; // speed of snake
exports.BASE_ANGLE = Math.PI * 200; // base angle of snake
exports.MAP_RECT_WIDTH = 200; // map small rect width
exports.MAP_RECT_HEIGHT = 200; // map small rect height
exports.TILE_IMG_WIDTH = 1000; // tile image width
exports.TILE_IMG_HEIGHT = 1000; // tile image height
exports.SNAKE_IMG_SIZE = 60; // size of snake's image
exports.SYNC_PER_FRAME = 5; // sync coordinates every 5 frames
exports.INIT_FOOD_COUNT = 2000;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRVUsUUFBQSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQXFCLFdBQVc7QUFDL0MsUUFBQSxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQWlCLGtCQUFrQjtBQUN0RCxRQUFBLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxDQUFVLHdCQUF3QjtBQUM1RCxRQUFBLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFTLHlCQUF5QjtBQUM3RCxRQUFBLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFhLGtCQUFrQjtBQUV0RCxRQUFBLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBd0IsY0FBYztBQUNsRCxRQUFBLE9BQU8sR0FBRyxZQUFJLEdBQUcsQ0FBQyxDQUFDLENBQWlCLG1CQUFtQjtBQUN2RCxRQUFBLFVBQVUsR0FBRyxZQUFJLEdBQUcsQ0FBQyxDQUFDLENBQWMsaUJBQWlCO0FBRXJELFFBQUEsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFtQixZQUFZO0FBQ2hELFFBQUEsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFrQixhQUFhO0FBRWpELFFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUEwQixpQkFBaUI7QUFDckQsUUFBQSxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBUyxzQkFBc0I7QUFFMUQsUUFBQSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQWUsdUJBQXVCO0FBQzNELFFBQUEsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFjLHdCQUF3QjtBQUM1RCxRQUFBLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBYyxtQkFBbUI7QUFDdkQsUUFBQSxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQWEsb0JBQW9CO0FBRXhELFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFnQix3QkFBd0I7QUFFNUQsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQWlCLGtDQUFrQztBQUV0RSxRQUFBLGVBQWUsR0FBRyxJQUFJLENBQUMifQ==