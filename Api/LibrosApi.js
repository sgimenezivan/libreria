import Factory from "../DAOs/Factory.js";
import { MODE } from "../config/config.js";

class LibrosApi {
  constructor() {
    this.factory = Factory.factory(MODE);
  }
  create = async (libro) => {
    try {
      const nuevoLibro = await this.factory.LibrosDao.createDao(libro);
      return nuevoLibro;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      const libros = await this.factory.LibrosDao.getAllDao();
      return libros;
    } catch (error) {
      return error;
    }
  };

  deleteByCode = async (codigo) => {
    try {

      const libroEliminado = await this.factory.LibrosDao.deleteByCodeDao(codigo);

      if (!libroEliminado) {
        throw new Error("Libro no encontrado");
      }

      return libroEliminado;
    } catch (error) {
      return error;
    }
  };

  getbyCode = async (codigo) => {
    try {

      const libro = await this.factory.LibrosDao.getByCode(codigo);
      return libro;
    } catch (error) {
      return error;
    }
  };
}

export default LibrosApi;
