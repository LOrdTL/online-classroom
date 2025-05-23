"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class FlashcardSetUser extends Model {
    static associate(models) {
      FlashcardSetUser.belongsTo(models.FlashcardSet, {
        foreignKey: "flashcardSetId",
        as: "flashcardSet",
      });
      FlashcardSetUser.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }

  FlashcardSetUser.init(
    {
      flashcardSetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "FlashcardSets",
          key: "id",
        },
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      isCreator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "FlashcardSetUser",
      tableName: "FlashcardSets_Users",
    }
  );

  return FlashcardSetUser;
};
