import { DataTypes } from "sequelize/types";
import { db } from "../db";

export const ColaboradoresModels = db.define('colaboradores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    grupos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pagRedesSociais: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descPerfil: {
        type: DataTypes.STRING,
        allowNull: true
    }
    
})