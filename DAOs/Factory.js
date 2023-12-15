import LibroMemoryDao from "./Memory/LibrosMemoryDao.js"
import LibroSqlDao from "./Sql/LibrosSqlDao.js";

class Factory {
  constructor() { }

  static factory = (MODE) => {
    if (MODE === "memory") {
      return {
        LibrosDao: new LibroMemoryDao(),
      };
    }
    if (MODE === "sql") {
      return {
        LibrosDao: new LibroSqlDao(),
      };
    }
  };
}

export default Factory;
