import LibrosApi from "../Api/LibrosApi.js";

class LibrosController {
  constructor() {
    this.librosApi = new LibrosApi()
  }

  create = async (req, res) => {
    try {
      const { codigo, titulo, autor } = req.body

      if (!codigo || !titulo || !autor) throw new Error("Datos incompletos. Por favor, envíe los datos completos del libro a crear");

      const nuevoLibro = await this.librosApi.create({ codigo, titulo, autor, estado: 'disponible' });

      res.status(200).send({ status: "OK", message: "Libro creado con éxito", data: nuevoLibro });

    } catch (error) {
      res.status(422).send({ status: "ERROR", message: error.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const libros = await this.librosApi.getAll();

      if (!libros) throw new Error("Error al obtener la lista de libros, por favor intente nuevamente");

      res.status(200).send({ status: "OK", message: "Obteniendo lista de libros", data: libros });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  getByCode = async (req, res) => {
    const { codigo } = req.params;
    if (!codigo) throw new Error("Datos incompletos. Por favor, envíe el código del libro a consultar");
    try {
      const libro = await this.librosApi.getbyCode(codigo);


      res.status(200).send({ status: "OK", message: "Libro encontrado", data: libro });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  deleteByCode = async (req, res) => {
    const { codigo } = req.params;
    if (!codigo) throw new Error("Datos incompletos. Por favor, envíe el código del libro a eliminar");

    try {
      const libroEliminado = await this.librosApi.deleteByCode(codigo);
      res.status(200).send({ status: "OK", message: "Libro eliminado con éxito", data: libroEliminado });
    }
    catch (error) {
      res.status(422).send({ message: error.message });
    }

  }
}

export default LibrosController;
