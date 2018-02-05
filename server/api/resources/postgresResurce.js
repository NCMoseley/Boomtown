const { Client } = require("pg");

const tq = tagIds => tagIds.map((id, i) => `($1, $${i + 2})`).join(", ");

module.exports = async app => {
  const client = new Client({
    user: app.get("PGUSER"),
    host: app.get("PGHOST"),
    database: app.get("PGDATABASE"),
    password: app.get("PGPASSWORD"),
    port: app.get("PGPORT")
  });

  await client.connect();

  return {
    getSharedItems(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE itemowner = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    getBorrowedItems(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE borrower = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },

    getItems() {
      return new Promise((resolve, reject) => {
        client.query("SELECT * FROM items", (err, res) => {
          console.log(err, res);
          resolve(res.rows);
        });
      });
    },

    getItem(id) {
      return new Promise((resolve, reject) => {
        client.query("SELECT * FROM items WHERE id = $1", [id], (err, res) => {
          resolve(res.rows);
        });
      });
    },
    getTags(itemsid) {
      return new Promise((resolve, reject) => {
        client.query(
          `select * from tags
           inner join itemtags on itemtags.tagid = tags.id 
           where itemtags.itemsid = $1
           `,
          [itemsid],
          (err, data) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(data.rows);
          }
        );
      });
    },
    async createItem({ title, description, imageurl, itemowner, tags }) {
      const itemValues = [title, description, imageurl, itemowner];

      tags = tags.map(t => t.id);

      const itemInsertQuery = `INSERT INTO items(title, description, imageurl, itemowner) 
                  VALUES($1, $2, $3, $4) RETURNING *`;
      try {
        await client.query("BEGIN");
        const itemResult = await client.query(itemInsertQuery, itemValues);

        const tagsInsertQuery = `INSERT INTO itemtags(itemsid, tagid) 
                                     VALUES ${tq(tags)}`;

        await client.query(tagsInsertQuery, [itemResult.rows[0].id, ...tags]);
        await client.query("COMMIT");

        return itemResult.rows[0];
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
    },
    updateItem(id) {
      return;
    },
    getItemsByTag(id) {
      return;
    }
  };
};
