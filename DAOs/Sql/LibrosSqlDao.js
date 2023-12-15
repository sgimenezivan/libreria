import { LibroModel } from "../../Models/index.js";

class LibroSqlDao {
  constructor() {
  }

  createDao = async (libro) => {
    try {
      const nuevoLibro = await LibroModel.create(libro)
      return nuevoLibro;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  getAllDao = async () => {
    try {
      const libros = await LibroModel.findAll()
      return libros
    } catch (error) {
      return Promise.reject(error);
    }
  };

  deleteByCodeDao = async (codigo) => {
    try {
      const libroAEliminar = await LibroModel.findOne({
        where: { codigo },
      });

      if (!libroAEliminar) {
        throw new Error("Libro no encontrado");
      }

      await LibroModel.destroy({
        where: { codigo },
      });

      return libroAEliminar;
    } catch (error) {
      return Promise.reject(error);
    }
  };


  getByCode = async (codigo) => {
    try {
      const libro = await LibroModel.findOne({
        where: { codigo },
      });

      if (!libro) {
        throw new Error("Libro no encontrado");
      }

      return libro;

    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default LibroSqlDao
