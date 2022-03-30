const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping",
  permissions: "ADMasssINISTRATOR",
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
      interaction.reply({content: "Pong!"});
  },
};
