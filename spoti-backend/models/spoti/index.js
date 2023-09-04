const { insertList, selectLists } = require("./queries");

const createList = (db) => async (listName, listURL, userId) => {
  try {
    const list = await db.query(insertList(listName, listURL, userId));

    return {
      ok: true,
      data: list,
    };
  } catch (error) {
    console.info("Create list error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getPlaylists = (db) => async (email) => {
  try {
    const allLists = await db.query(selectLists(email));

    return {
      ok: true,
      data: allLists,
    };
  } catch (error) {
    console.info("Selecct lists error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createList,
  getPlaylists,
};
