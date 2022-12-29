module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      firstname: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      walletAddress: {
        type: Sequelize.STRING
      }

      
    });
  

    return User;
  };

  