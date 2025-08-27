const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~RQYwzBgL#eNEzv5AUkiDRb53FN1cnUNY6ElSqZHHrxZasyA5X0_o'
};
