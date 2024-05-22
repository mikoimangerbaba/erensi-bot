let channelCreateCount = 0;
const CHANNEL_CREATE_LIMIT = 5;

module.exports = (client) => {
    client.on('channelCreate', channel => {
        channelCreateCount++;
        if (channelCreateCount > CHANNEL_CREATE_LIMIT) {
            channel.delete();
        }
        setTimeout(() => channelCreateCount--, 60000);
    });
};
