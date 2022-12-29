module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL(10,2)
      },
    },
    {
      indexes:[
        {
          fields:['userId'],
          unique:true
        }
      ]
    });
  
    return Cart;
  };

  