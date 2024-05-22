const MENTION_LIMIT = 5;

module.exports = (client) => {
    client.on('messageCreate', message => {
        if (message.mentions.everyone || message.mentions.roles.size > MENTION_LIMIT) {
            message.delete();
        }
    });
};
