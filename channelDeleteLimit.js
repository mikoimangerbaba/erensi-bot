let channelDeleteCount = 0;
const CHANNEL_DELETE_LIMIT = 5; 

module.exports = (client) => {
    client.on('channelDelete', channel => {
        channelDeleteCount++;
        if (channelDeleteCount > CHANNEL_DELETE_LIMIT) {
            
        }
        setTimeout(() => channelDeleteCount--, 60000); 
    });
};
