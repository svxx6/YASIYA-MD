const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ipY0iRJS#pgUU3os4y8eBwRbMEjPjtVT2QUZBn7mCENVuZlItdFc'
};
