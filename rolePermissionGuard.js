const PROHIBITED_PERMISSIONS = ['ADMINISTRATOR', 'BAN_MEMBERS']; 
module.exports = (client) => {
    client.on('roleUpdate', (oldRole, newRole) => {
        if (PROHIBITED_PERMISSIONS.some(permission => newRole.permissions.has(permission))) {
            newRole.setPermissions(oldRole.permissions);
        }
    });
};
