const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '&TlB0lQYL#3Ra-ZVxXSgWISzwh9j2uN1z8hvuSRY9SoeBzaFk0gX8'
};
