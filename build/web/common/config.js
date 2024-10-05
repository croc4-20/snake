/**
 * Created by wanghx on 5/3/16.
 *
 * constant
 *
 */
export const CMD_INIT = 100; // init cmd
export const CMD_INIT_ACK = 101; // init answer cmd
export const CMD_SYNC_MAIN_COORD = 102; // sync main coordinates
export const CMD_SYNC_OTHER_COORD = 103; // sync other coordinates
export const CMD_LOSE_CONNECT = 104; // lose connection
export const port = 9999; // server port
export const devPort = port - 1; // development port
export const socketPort = port - 2; // websocket port
export const MAP_WIDTH = 5000; // map width
export const MAP_HEIGHT = 5000; // map height
export const SPEED = 4; // speed of snake
export const BASE_ANGLE = Math.PI * 200; // base angle of snake
export const MAP_RECT_WIDTH = 200; // map small rect width
export const MAP_RECT_HEIGHT = 200; // map small rect height
export const TILE_IMG_WIDTH = 1000; // tile image width
export const TILE_IMG_HEIGHT = 1000; // tile image height
export const SNAKE_IMG_SIZE = 60; // size of snake's image
export const SYNC_PER_FRAME = 5; // sync coordinates every 5 frames
export const INIT_FOOD_COUNT = 2000;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2ViL2NvbW1vbi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFFSCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQXFCLFdBQVc7QUFDNUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFpQixrQkFBa0I7QUFDbkUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDLENBQVUsd0JBQXdCO0FBQ3pFLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFTLHlCQUF5QjtBQUMxRSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBYSxrQkFBa0I7QUFFbkUsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUF3QixjQUFjO0FBQy9ELE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQWlCLG1CQUFtQjtBQUNwRSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFjLGlCQUFpQjtBQUVsRSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQW1CLFlBQVk7QUFDN0QsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFrQixhQUFhO0FBRTlELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBMEIsaUJBQWlCO0FBQ2xFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFTLHNCQUFzQjtBQUV2RSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQWUsdUJBQXVCO0FBQ3hFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBYyx3QkFBd0I7QUFDekUsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFjLG1CQUFtQjtBQUNwRSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQWEsb0JBQW9CO0FBRXJFLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBZ0Isd0JBQXdCO0FBRXpFLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBaUIsa0NBQWtDO0FBRW5GLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMifQ==