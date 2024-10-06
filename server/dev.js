"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const tslib_1 = require("tslib");
// const child_process_1 = tslib_1.__importDefault(require("child_process"));
// const chokidar_1 = tslib_1.__importDefault(require("chokidar"));
// const ip_1 = tslib_1.__importDefault(require("ip"));
// const path_1 = tslib_1.__importDefault(require("path"));
// const address = ip_1.default.address();

import { spawn, ChildProcess } from 'child_process'; // Replace require with import
import chokidar from 'chokidar'; // Replace require with import
import ip from 'ip'; // Replace require with import
import path from 'path'; // Replace require with import

const address = ip.address();
let timeout: NodeJS.Timeout;
let serverProcess: ChildProcess | undefined;

// start building
const buildProcess = spawn('npm', ['run', 'build'], {
  env: { ...process.env, LOCAL_IP: address },
  stdio: [0, 1, 2],
});

startServerProcess();
// watch file change and restart server
const watcher = chokidar
  .watch([path.resolve(__dirname, './'), path.resolve(__dirname, '../web/common')])
    .on('add', startServerProcess)
    .on('change', startServerProcess)
    .on('unlink', startServerProcess);
    
function startServerProcess(f) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if (f) {
            console.info(f + ' changed, restart server...');
        }
        if (serverProcess && !serverProcess.killed) {
            serverProcess.kill('SIGINT');
        }
        serverProcess = child_process_1.default.spawn('node', ['--require', 'ts-node/register', path_1.default.resolve(__dirname, './index.ts')], {
            stdio: [0, 1, 2],
        });
        serverProcess.on('error', () => {
            console.info('server error, restart now');
            setTimeout(startServerProcess, 2000);
        });
    }, 1000);
}
function close() {
    watcher.close();
    if (serverProcess && !serverProcess.killed) {
        serverProcess.kill('SIGINT');
    }
    if (buildProcess && !buildProcess.killed) {
        buildProcess.kill('SIGINT');
    }
}
process.on('exit', close);
process.on('SIGINT', close);
process.on('SIGTERM', close);
process.on('SIGHUP', close);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUEwQztBQUMxQyxnRUFBZ0M7QUFDaEMsb0RBQW9CO0FBQ3BCLHdEQUF3QjtBQUN4QixNQUFNLE9BQU8sR0FBRyxZQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0IsSUFBSSxPQUFPLENBQUM7QUFDWixJQUFJLGFBQXlDLENBQUM7QUFFOUMsaUJBQWlCO0FBQ2pCLE1BQU0sWUFBWSxHQUFHLHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtJQUNoRSxHQUFHLGtDQUNFLE9BQU8sQ0FBQyxHQUFHLEtBQ2QsUUFBUSxFQUFFLE9BQU8sR0FDbEI7SUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNqQixDQUFDLENBQUM7QUFFSCxrQkFBa0IsRUFBRSxDQUFDO0FBRXJCLHVDQUF1QztBQUN2QyxNQUFNLE9BQU8sR0FBRyxrQkFBUTtLQUNyQixLQUFLLENBQUMsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ2hGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUM7S0FDN0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztLQUNoQyxFQUFFLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFcEMsU0FBUyxrQkFBa0IsQ0FBQyxDQUFVO0lBQ3BDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsSUFBSSxhQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0MsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsYUFBYSxHQUFHLHVCQUFhLENBQUMsS0FBSyxDQUNqQyxNQUFNLEVBQ04sQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFDeEU7WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQixDQUNGLENBQUM7UUFFRixhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxTQUFTLEtBQUs7SUFDWixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFaEIsSUFBSSxhQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0MsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=