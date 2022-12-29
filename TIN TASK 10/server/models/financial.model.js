module.exports = (sequelize, Sequelize) => {
    const Financial = sequelize.define("financial", {
      
      amount: {
        type: Sequelize.DECIMAL(10,2)
      },
      title: {
        type: Sequelize.STRING
      },

      comment: {
        type: Sequelize.STRING
      },


    });
  
    return Financial;
  };

  