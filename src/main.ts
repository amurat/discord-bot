import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { TOKEN } from './config';
import { onMessageCreate, onReady, onInteractionCreate } from './listeners';

const client = new Client({ intents : [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages],
    partials: [Partials.Channel],
});

onReady(client);
onMessageCreate(client);
onInteractionCreate(client);

client.login(TOKEN); 