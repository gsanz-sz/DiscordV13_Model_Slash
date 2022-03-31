const { CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping",
  permission: "ADMINISTRATOR",
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {

    const row = new MessageActionRow();
    row.addComponents(
      new MessageButton()
      .setCustomId("Test")
      .setLabel("Test")
      .setStyle("SUCCESS")
    )
    interaction.reply({ components: [row] });
  },
};
