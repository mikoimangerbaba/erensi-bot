const PROHIBITED_PERMISSIONS = ['ADMINISTRATOR', 'BAN_MEMBERS'];

module.exports = (client) => {
    client.on('guildMemberUpdate', (oldMember, newMember) => {
        newMember.roles.cache.forEach(role => {
            if (PROHIBITED_PERMISSIONS.some(permission => role.permissions.has(permission))) {
                newMember.roles.remove(role);
            }
        });
    });
};
