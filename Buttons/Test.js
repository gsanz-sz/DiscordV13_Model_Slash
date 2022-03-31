module.exports = {
    id: "Test",
    permission: "ADMINISTRATOR",
    execute(interaction) {
        interaction.reply({ content: "Pong!" });
    }
}