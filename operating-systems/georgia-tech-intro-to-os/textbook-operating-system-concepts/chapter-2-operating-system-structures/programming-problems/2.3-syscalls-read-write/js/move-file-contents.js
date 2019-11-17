const fs = require("fs");
const path = require("path");
const rl = require("readline");

const getFilepath = filename => path.join(__dirname, filename);
(() => {
  const prompt = rl.createInterface(process.stdin, process.stdout);
  // use hard-coded paths for this exercise
  const sourceFilepath = getFilepath("source-file.txt");
  const destinationFilepath = getFilepath("destination-file.txt");

  const promptForScript = () => {
    prompt.question("Proceed with copying files? (y/n)", answer => {
      if (answer === "y") {
        console.log("Copying file...");

        if (!fs.existsSync(sourceFilepath)) {
          fs.writeFileSync(sourceFilepath, "new data");
        }

        fs.copyFile(sourceFilepath, destinationFilepath, err => {
          if (err) {
            console.log("err:", err);
            return;
          }

          console.log("File successfully copied");
          promptForScript();
        });
      } else if (answer === "n") {
        console.log("Terminating program with no file changes");
        prompt.close();
      } else {
        promptForScript();
      }
    });
  };

  promptForScript();
})();
