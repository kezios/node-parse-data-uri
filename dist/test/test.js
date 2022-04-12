"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const __1 = __importDefault(require("../"));
const testFile = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'test.datauri'), { encoding: 'utf-8' });
describe('parse-data-uri', () => {
    it('returns an object', () => {
        const parsed = (0, __1.default)(testFile);
        expect(Object.keys(parsed)).toEqual(['mimeType', 'data', 'name']);
    });
    it('parses mime type', () => {
        const parsed = (0, __1.default)(testFile);
        expect(parsed.mimeType).toBe('image/gif');
    });
    it('parses additionals info', () => {
        const parsed = (0, __1.default)(testFile);
        expect(parsed.name).toBe('test');
    });
    it('decodes the buffer', () => {
        const parsed = (0, __1.default)(testFile);
        expect(parsed.data).toBeInstanceOf(Buffer);
    });
});
