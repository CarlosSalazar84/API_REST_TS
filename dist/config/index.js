"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_FRONTEND = exports.TABLE_NAMES = exports.DB_PORT = exports.DB_NAME = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || "8080";
exports.DB_USER = process.env.DB_USER || "";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "";
exports.DB_HOST = process.env.DB_HOST || "";
exports.DB_NAME = process.env.DB_NAME || "";
exports.DB_PORT = process.env.DB_PORT || "";
exports.TABLE_NAMES = process.env.TABLE_NAMES || "";
exports.URL_FRONTEND = process.env.URL_FRONTEND || "";
