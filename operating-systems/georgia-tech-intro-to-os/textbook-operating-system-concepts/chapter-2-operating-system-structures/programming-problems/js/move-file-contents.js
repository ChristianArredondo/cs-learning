const fs = require("fs");
const path = require("path");
const rl = require("readline");

/**
  In Section 2.3, we described a program that copies the contents of one file
  to a destination file. This program works by first prompting the user for
  the name of the source and destination files. Write this program using
  either the Windows or POSIX API. Be sure to include all necessary error
  checking, including ensuring that the source file exists.
  Once you have correctly designed and tested the program, if you
  used a system that supports it, run the program using a utility that traces
  system calls. Linux systems provide the strace utility, and Solaris and
  Mac OS X systems use the dtrace command. As Windows systems do
  not provide such features, you will have to trace through the Windows
  version of this program using a debugger.
 */

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
