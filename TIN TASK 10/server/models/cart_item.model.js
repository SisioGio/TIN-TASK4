module.exports = (sequelize, Sequelize) => {
    const CartItem = sequelize.define("cart_item", {
      
      quantity: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      price: {
        type:Sequelize.DECIMAL(10,2)
      }



    });
  
    return CartItem;
  };

  