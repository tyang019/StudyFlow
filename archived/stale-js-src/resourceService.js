"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getAll = void 0;
let resources = [
    { id: 1, title: 'Learn React', type: 'course', completed: false },
    { id: 2, title: 'Node.js Basics', type: 'article', completed: true },
];
const getAll = () => resources;
exports.getAll = getAll;
const create = (data) => {
    const newItem = { id: Date.now(), ...data };
    resources.push(newItem);
    return newItem;
};
exports.create = create;
const update = (id, data) => {
    resources = resources.map(r => (r.id === id ? { ...r, ...data } : r));
};
exports.update = update;
const remove = (id) => {
    resources = resources.filter(r => r.id !== id);
};
exports.remove = remove;
