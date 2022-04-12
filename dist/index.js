"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_uri_to_buffer_1 = __importDefault(require("data-uri-to-buffer"));
const parseDataUri = (dataUri) => {
    let mimeType = 'text/plain';
    if (dataUri.charAt(6) !== ',')
        mimeType = getMimeType(dataUri);
    const uriData = dataUri.split(';').slice(1, -1);
    const uriObject = {};
    uriData.forEach((element) => {
        uriObject[element.split('=')[0]] = element.split('=')[1];
    });
    return Object.assign({ mimeType, data: (0, data_uri_to_buffer_1.default)(dataUri) }, uriObject);
};
const getMimeType = (dataUri) => {
    return dataUri
        .substring(5, dataUri.indexOf(';'))
        .toLowerCase();
};
exports.default = parseDataUri;
