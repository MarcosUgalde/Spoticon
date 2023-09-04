const { sql } = require("slonik");

const insertList = (listName, listURL, userId) => sql.unsafe`
    INSERT INTO lists (
        list_name, list_url, created_by
    ) VALUES (
        ${listName}, ${listURL}, ${userId}
    )
`;

const selectLists = (userId) => sql.unsafe`
        SELECT lists.list_name, lists.list_url, lists.created_by, users.username FROM lists 
        INNER JOIN users
        ON users.id = lists.created_by
        WHERE lists.created_by = ${userId};
`;

module.exports = {
  insertList,
  selectLists,
};
