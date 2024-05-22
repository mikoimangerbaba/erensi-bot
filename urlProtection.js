module.exports = (client) => {
    client.on('guildUpdate', (oldGuild, newGuild) => {
        if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
        }
    });
};
