const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildMessages] });

const botFilter = require('./botFilter.js');
const accountFilter = require('./accountFilter.js');
const channelCreateLimit = require('./channelCreateLimit.js');
const channelDeleteLimit = require('./channelDeleteLimit.js');
const kickLimit = require('./kickLimit.js');
const roleCreateLimit = require('./roleCreateLimit.js');
const roleDeleteLimit = require('./roleDeleteLimit.js');
const rolePermissionGuard = require('./rolePermissionGuard.js');
const massMentionLimit = require('./massMentionLimit.js');
const urlProtection = require('./urlProtection.js');
const banLimit = require('./banLimit.js');
const permissionAssignGuard = require('./permissionAssignGuard.js');

botFilter(client);
accountFilter(client);
channelCreateLimit(client);
channelDeleteLimit(client);
kickLimit(client);
roleCreateLimit(client);
roleDeleteLimit(client);
rolePermissionGuard(client);
massMentionLimit(client);
urlProtection(client);
banLimit(client);
permissionAssignGuard(client);

client.login('bot tokenini gir');