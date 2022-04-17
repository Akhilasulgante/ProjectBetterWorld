import minimongo from "minimongo";

/**
 * This component is for Minimongo implementation of the project. It has functionalities such as create and get data
 *
 * @param   {object}  dbName    [Name of the database]
 *
 * @return  {object} [Minimongo instance]
 */
export default function CreateStory(dbName = "Ustories") {
  const IndexedDb = minimongo.IndexedDb;

  const story = {};

  story.getStory = function (query = {}) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "Stories",
            function () {
              db.Stories.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  story.CreateStories = function (newStory) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          console.log("Creating in mini");
          db.addCollection(
            "Stories",
            function () {
              db.Stories.upsert(newStory, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  return story;
}
