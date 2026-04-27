"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resourceController_1 = require("../controllers/resourceController");
const router = express_1.default.Router();
router.get('/', resourceController_1.getResources);
router.post('/', resourceController_1.createResource);
router.put('/:id', resourceController_1.updateResource);
router.delete('/:id', resourceController_1.deleteResource);
// mock DB (replace with real DB later)
let resources = [
    { id: 1, title: 'Learn React', type: 'course', completed: false },
    { id: 2, title: 'Node.js Basics', type: 'article', completed: true },
];
// GET all
router.get('/', (req, res) => {
    res.json(resources);
});
// CREATE
router.post('/', (req, res) => {
    const newResource = {
        id: Date.now(),
        ...req.body,
    };
    resources.push(newResource);
    res.status(201).json(newResource);
});
// UPDATE
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    resources = resources.map((r) => r.id === id ? { ...r, ...req.body } : r);
    res.json({ message: 'Updated successfully' });
});
// DELETE
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    resources = resources.filter((r) => r.id !== id);
    res.json({ message: 'Deleted successfully' });
});
exports.default = router;
