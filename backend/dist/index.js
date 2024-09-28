"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const port = process.env.PORT || 24601;
app.use((0, cors_1.default)({ exposedHeaders: 'Authorization' }));
app.use('/api/users', users_1.default);
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
