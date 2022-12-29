module.exports = (sequelize, Sequelize) => {
    const Delivery = sequelize.define("delivery", {
      
      
      cost :{
        type:Sequelize.DECIMAL(10,2)
      }


    });
  
    return Delivery;
  };

  