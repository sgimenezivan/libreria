import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class LibroModel extends Model { }

LibroModel.init(
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        len: {
          args: [1, 4],
          msg: "El codigo debe tener entre 1 y 4 caracteres",
        },
      }
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM("disponible", "alquilado", "no-apto"),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Libros",
  }
);

export default LibroModel;
