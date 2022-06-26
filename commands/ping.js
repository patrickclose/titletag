const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tag')
		.setDescription('Create a Name Tag')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('The user to be tagged')
            .setRequired(true))
        .addStringOption(option => 
            option.setName('tag')
            .setDescription('submitted tag')
            .setRequired(true)),
    async execute(interaction) {
		await interaction.reply('Name tag added!');
	},
};