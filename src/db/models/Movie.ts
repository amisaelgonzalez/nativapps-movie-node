import { DataTypes, Model, ModelStatic, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface MovieAttributes {
    id: number;
    title: string; // "Title": "Love, Victor"
    year: string; // "Year": "2020–2022"
    type: string; // "Type": "series"
    poster: string; // "Poster": "https://m.media-amazon.com/images/M/MV5BZmJmMmVjNTUtN2FjZi00YzdmLWJmMGMtNTQ4MmUwYmZmYmEwXkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_SX300.jpg"
    imdbID: string; // imdbID: "tt10166602",
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface MovieInput extends Optional<MovieAttributes, 'id'> {}

export interface MovieOuput extends Required<MovieAttributes> {}

class Movie extends Model<MovieAttributes, MovieInput> implements MovieAttributes {
    public id!: number;
    public title!: string;
    public year!: string;
    public type!: string;
    public poster!: string;
    public imdbID!: string;
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imdbID: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'movies'
});

export default Movie;
