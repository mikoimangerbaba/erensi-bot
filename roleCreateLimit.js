let roleCreateCount = 0;
const ROLE_CREATE_LIMIT = 5;

module.exports = (client) => {
    client.on('roleCreate', role => {
        roleCreateCount++;
        if (roleCreateCount > ROLE_CREATE_LIMIT) {
            role.delete();
        }
        setTimeout(() => roleCreateCount--, 60000);
    });
};
