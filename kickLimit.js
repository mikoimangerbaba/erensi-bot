let kickCount = 0;
const KICK_LIMIT = 5; 

module.exports = (client) => {
    client.on('guildMemberRemove', (member) => {
        
        if (member.kickable) {
            kickCount++;
            if (kickCount > KICK_LIMIT) {
                
            }
            setTimeout(() => kickCount--, 60000); 
        }
    });
};
