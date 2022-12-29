module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      delivered: {
        type: Sequelize.BOOLEAN
      },
      paid: {
        type: Sequelize.BOOLEAN
      },

      transactionHash: {
        type: Sequelize.STRING
      },

      
    });
  
    return Order;
  };

  