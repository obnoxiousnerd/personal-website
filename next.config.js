const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "avatars0.githubusercontent.com",
      "img.stackshare.io",
      "d2fltix0v2e0sb.cloudfront.net",
    ],
  },
};
