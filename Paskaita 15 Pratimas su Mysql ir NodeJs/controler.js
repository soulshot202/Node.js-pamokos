import db from "./db.js";

export async function getAllItems(req, res) {
  const { limit } = req.query;
  try {
    if (limit) {
      const { rows } = await db.query(`SELECT * FROM items limit ${limit}`);
      res.status(201).json(rows);
    } else {
      const { rows } = await db.query("SELECT * FROM items limit 10");
      res.status(201).json(rows);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createItem(req, res) {
  const { title } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    } else {
      const { rows } = await db.query(
        `INSERT INTO items (title) VALUES ('${title}') RETURNING *`
      );
      res.status(201).json(rows);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteItem(req, res) {
  const { id } = req.params;

  if (Number.isNaN(+id)) {
    res.status(404).json({ message: "wrong id" });
    return;
  }
  if (id.length === 0) {
    res.status(404).json({ message: "Item not found" });
    return;
  }
  try {
    const { rowCount, rows } = await db.query(
      `DELETE FROM items WHERE id = ${id} returning *`
    );
    if (rowCount === 0) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(`Item ${rows[0].title} with id ${id} was deleted`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
