let banCount = 0;
const BAN_LIMIT = 5; 

module.exports = (client) => {
    client.on('guildBanAdd', (ban) => {
        banCount++;
        if (banCount > BAN_LIMIT) {
            
        }
        setTimeout(() => banCount--, 60000); 
    });
};
