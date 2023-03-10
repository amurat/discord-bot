import { SlashCommandBuilder } from "@discordjs/builders";
import { SlashCommand } from "../types";

export const HelloCommand : SlashCommand = {
    command : new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Returns a greeting'),
    run: async(interaction) => {
        await interaction.reply( {
            content: `Hello ${interaction.member?.user.username}`,
        })
    }
}