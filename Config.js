const botprefix = process.env.PREFIX;
const botowner = process.env.OWNER;
const botdctoken = process.env.DISCORD_TOKEN;
const botinvite = process.env.INVITE;
const request_channel = process.env.REQUEST_CHANNEL
module.exports = {
    prefix: [botprefix],
    owner: botowner,
    token: botdctoken,
    invite: botinvite,
    requestChannel: request_channel,
    otherCommandColor: '#a5fc03'
};
