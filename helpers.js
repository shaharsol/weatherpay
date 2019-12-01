const moment = require("moment");

const extractDate = timestamp => moment.unix(timestamp).format("YYYY-MM-DD");

module.exports = {
  extractDate
}
