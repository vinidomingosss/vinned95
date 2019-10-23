const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/vinned95/vinned95.git"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
