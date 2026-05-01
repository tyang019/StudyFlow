"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.updateResource = exports.createResource = exports.getResources = void 0;
const service = __importStar(require("../services/resourceService"));
// GET
const getResources = (req, res) => {
    res.json(service.getAll());
};
exports.getResources = getResources;
// CREATE
const createResource = (req, res) => {
    const newItem = service.create(req.body);
    res.status(201).json(newItem);
};
exports.createResource = createResource;
// UPDATE
const updateResource = (req, res) => {
    service.update(Number(req.params.id), req.body);
    res.json({ message: 'Updated' });
};
exports.updateResource = updateResource;
// DELETE
const deleteResource = (req, res) => {
    service.remove(Number(req.params.id));
    res.json({ message: 'Deleted' });
};
exports.deleteResource = deleteResource;
