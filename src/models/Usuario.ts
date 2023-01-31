import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UsuarioInstance extends Model{
    idONG: number
    nome: string
    tel: string
    cnpj: string
    endereco: string
    website: string
}
export const Usuario = sequelize.define<UsuarioInstance>("Usuario,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    tel:{
        type:DataTypes.STRING,
    },
    cnpj:{
        type:DataTypes.STRING
    },
    endereco:{
        type:DataTypes.STRING
    },
    website:{
        type:DataTypes.STRING
    }

},{
    tableName:'usuarios',
    timestamps:false
})