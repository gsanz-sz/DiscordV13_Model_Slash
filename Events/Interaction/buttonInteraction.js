const { ButtonInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   * @param {ButtonInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isButton()) return;
    const Button = client.buttons.get(interaction.customId);

    if (
      Button.permission &&
      !interaction.member.permissions.has(Button.permission)
    ) {
      return interaction.reply({
        content: `Vocë não tem permissão para usar este botão.`,
        ephemeral: true,
      });
    }

    if (
      Button.ownerOnly &&
      interaction.member.id !== interaction.guild.ownerId
    ) {
      return interaction.reply({
        content: `Apenas o dono do servidor tem acesso a este botão.`,
        ephemeral: true,
      });
    }

    Button.execute(interaction, client);
  },
};
