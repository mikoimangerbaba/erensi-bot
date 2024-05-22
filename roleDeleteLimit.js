let roleDeleteCount = 0;
const ROLE_DELETE_LIMIT = 5; 

module.exports = (client) => {
    client.on('roleDelete', role => {
        roleDeleteCount++;
        if (roleDeleteCount > ROLE_DELETE_LIMIT) {
            
        }
        setTimeout(() => roleDeleteCount--, 60000); 
    });
};
