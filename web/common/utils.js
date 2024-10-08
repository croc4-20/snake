'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SNAKE_BODY_TYPE = exports.AREA_TYPE = exports.VIEW_TYPE = exports.FOOD_TYPE = exports.SNAKE_TYPE = void 0;
exports.encode = encode;
exports.decode = decode;
const buffer_1 = require("buffer");
const OPT_LEN = 1;
const PACKET_TYPE_LEN = 1;
exports.SNAKE_TYPE = 1;
exports.FOOD_TYPE = 2;
exports.VIEW_TYPE = 3;
exports.AREA_TYPE = 4;
exports.SNAKE_BODY_TYPE = 5;
const floatType = {
    byteLen: 3,
    encode: (value) => ~~(value * 100),
    decode: (value) => value / 100,
};
const packetTypes = {
    [exports.SNAKE_TYPE]: {
        id: { byteLen: 2 },
        angle: { byteLen: 2 },
        size: { byteLen: 2 },
        speed: { byteLen: 1 },
        length: { byteLen: 2 },
        x: floatType,
        y: floatType,
    },
    [exports.FOOD_TYPE]: {
        x: floatType,
        y: floatType,
    },
    [exports.VIEW_TYPE]: {
        width: { byteLen: 2 },
        height: { byteLen: 2 },
    },
};
// encode data to binary data
// {
//   opt: 1,
//   data: [{
//     type: 1,
//     packet: {
//       x: data.x,
//       y: data.y,
//       angle: data.angle * Math.PI / 180,
//       size: data.size,
//     }
//   }]
// }
buffer_1.Buffer.poolSize = 100 * 1024;
const allocLen = 1024;
function encode({ opt, data }) {
    const bufList = [];
    let byteLen = 0;
    let offset = 0;
    data = Array.isArray(data) ? data : [data];
    let buf = buffer_1.Buffer.alloc(allocLen);
    bufList.push(buf);
    const writeUInt = (value, byteLength) => {
        byteLen += byteLength;
        const less = allocLen - offset;
        if (less < byteLength) {
            if (less) {
                // split buffer
                byteLength -= less;
                const i = Math.pow(2, byteLength * 8);
                const l = (value / i) >>> 0;
                value -= l * i;
                buf.writeUIntBE(l, offset, less);
            }
            buf = buffer_1.Buffer.alloc(allocLen);
            bufList.push(buf);
            offset = 0;
        }
        buf.writeUIntBE(value, offset, byteLength);
        offset += byteLength;
    };
    writeUInt(opt, OPT_LEN);
    // set buffer
    data.forEach((item) => {
        const packetType = packetTypes[item.type];
        writeUInt(item.type, PACKET_TYPE_LEN);
        for (const key in packetType) {
            if (packetType.hasOwnProperty(key)) {
                let value = +item.packet[key] || 0;
                const packetItem = packetType[key];
                const byteLength = packetItem.byteLen;
                if (packetItem.encode) {
                    value = packetItem.encode(value);
                }
                writeUInt(value, byteLength);
            }
        }
    });
    if (bufList.length > 1) {
        buf = buffer_1.Buffer.concat(bufList, bufList.length * allocLen);
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + byteLen);
}
// decode binary data to json
function decode(buf) {
    const json = {};
    // buf may be node buffer
    if (!ArrayBuffer.isView(buf)) {
        buf = buffer_1.Buffer.from(buf);
    }
    json.opt = buf[0];
    json.data = [];
    const max = buf.byteLength - OPT_LEN;
    let i = OPT_LEN;
    while (i < max) {
        const type = buf[i];
        const packetType = packetTypes[type];
        const data = {};
        i += PACKET_TYPE_LEN;
        for (const key in packetType) {
            if (packetType.hasOwnProperty(key)) {
                const packetItem = packetType[key];
                const byteLen = packetItem.byteLen;
                const value = buf.readUIntBE(i, byteLen);
                data[key] = packetItem.decode ? packetItem.decode(value) : value;
                i += byteLen;
            }
        }
        json.data.push({
            type,
            packet: data,
        });
    }
    return json;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQXVEYix3QkF3REM7QUFHRCx3QkFvQ0M7QUFwSkQsbUNBQWdDO0FBRWhDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDYixRQUFBLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDZixRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFFakMsTUFBTSxTQUFTLEdBQUc7SUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRztDQUMvQixDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQUc7SUFDbEIsQ0FBQyxrQkFBVSxDQUFDLEVBQUU7UUFDWixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ2xCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDckIsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNwQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDdEIsQ0FBQyxFQUFFLFNBQVM7UUFDWixDQUFDLEVBQUUsU0FBUztLQUNiO0lBRUQsQ0FBQyxpQkFBUyxDQUFDLEVBQUU7UUFDWCxDQUFDLEVBQUUsU0FBUztRQUNaLENBQUMsRUFB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