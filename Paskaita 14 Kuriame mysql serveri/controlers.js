import db from "./db.js";

export async function createPhone(req, res) {
  const { price, brand } = req.body;
  try {
    const { rows } = await db.query(
      `INSERT INTO phones (price, brand) VALUES (${price}, '${brand}') RETURNING *`
    );

    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllPhones(req, res) {
  const { limit, order } = req.query;
  try {
    let query = `SELECT * FROM phones`;

    if (order) {
      query += ` ORDER BY Price ${order}`;
    }
    if (limit) {
      query += ` LIMIT ${limit}`;
    }
    const { rows } = await db.query("SELECT * FROM phones");
    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getPhoneById(req, res) {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM phones WHERE id = ${id}`);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Phone not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deletePhoneById(req, res) {
  const { id } = req.params;
  try {
    const { rowCount } = await db.query(`DELETE FROM phones WHERE id = ${id}`);
    if (rowCount === 0) {
      return res.status(404).json({ message: "Phone not found" });
    } else {
      res.json({ message: "Phone deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updatePhoneById(req, res) {
  const { id } = req.params;
  const { price, brand } = req.body;
  try {
    const { rowCount } = await db.query(
      `UPDATE phones SET price = ${price}, brand = '${brand}' WHERE id = ${id}`
    );
    if (rowCount === 0) {
      return res.status(404).json({ message: "Phone not found" });
    } else {
      res.json({ message: "Phone updated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
