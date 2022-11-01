"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const CustomButtom = ({ title, isDisabled }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ disabled: isDisabled }, { children: title })));
};
exports.default = CustomButtom;
