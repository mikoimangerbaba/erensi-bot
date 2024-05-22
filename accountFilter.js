const MIN_ACCOUNT_AGE_DAYS = 30;

module.exports = (client) => {
    client.on('guildMemberAdd', member => {
        const accountAge = (Date.now() - member.user.createdAt) / (1000 * 60 * 60 * 24);
        if (accountAge < MIN_ACCOUNT_AGE_DAYS) {
            member.kick('Account is too new');
        }
    });
};
