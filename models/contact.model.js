// Lors de la creation de la base de donnée dans PhpMyAdmin, bien penser a choisir UTF8mb4 pour ne pas avoir de soucis avec les emojis 😊😊😊😊😊😊😊
export default (connection, DataType) => {
    connection.define(
        'Contact',
        {
            firstname: {
                type: DataType.STRING,
                allowNull: false
            },
            lastname: {
                type: DataType.STRING,
                allowNull: false
            },
            email: {
                type: DataType.STRING,
                allowNull: false
            },
            phonenumber: {
                type: DataType.STRING,
                allowNull: false
            },
            message: {
                type: DataType.TEXT,
                allowNull: false
            }
        },
        { timestamps: true }
    );
  }