package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"path"
)

func main() {
	// create input reader from standard input
	reader := bufio.NewReader(os.Stdin)

	// prompt user for source filename
	fmt.Println("\nEnter name of source file: ")
	sourceFilename, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}

	// build absolute source filepath
	workingdir, _ := os.Getwd()
	absoluteSourceFilepath := path.Join(workingdir, sourceFilename[:len(sourceFilename)-1])

	// attempt to read file
	fmt.Println("Attempting to read file from:", absoluteSourceFilepath)
	sourceData, err := ioutil.ReadFile(absoluteSourceFilepath)
	if err != nil {
		fmt.Println("Error reading file: ", err)
		return
	}

	// prompt user for destination filename
	fmt.Println("\nEnter name of destination file: ")
	destinationFilename, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}

	// write file
	fmt.Println("Copying file...")
	err = ioutil.WriteFile(path.Join(workingdir, destinationFilename[:len(destinationFilename)-1]), sourceData, 0644)
	if err != nil {
		fmt.Println("Error writing file:", err)
	}

	fmt.Println("Done copying file.")
}
