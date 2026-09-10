import * as db from '../database/db.js'

export const getAll = (req, res) => res.status(200).json(db.getAllEmployee());

export const getById = (req, res) => {
    const employee = db.getCarById(+req.params.id);

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json(employee);
}