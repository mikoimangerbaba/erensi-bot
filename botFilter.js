module.exports = (client) => {
    client.on('guildMemberAdd', member => {
        if (member.user.bot && !member.guild.ownerID === member.user.id) {
            member.kick('Unauthorized bot added');
        }
    });
};
