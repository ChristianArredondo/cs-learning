package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

// A Name provides an simple interface for describing a person's names
type Name struct {
	fname string
	lname string
}

/**
Write a program which reads information from a file
and represents it in a slice of structs. Assume that
there is a text file which contains a series of names.
Each line of the text file has a first name and a last
name, in that order, separated by a single space on the
line.

Your program will define a name struct which has two
fields, fname for the first name, and lname for the last
name. Each field will be a string of size 20 (characters).

Your program should prompt the user for the name of the
text file. Your program will successively read each line
of the text file and create a struct which contains the
first and last names found in the file. Each struct
created will be added to a slice, and after all lines
have been read from the file, your program will have a
slice containing one struct for each line in the file.
After reading all lines from the file, your program should
iterate through your slice of structs and print the first
and last names found in each struct.
*/
func main() {
	// read filename input from user
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter filename")
	filename, err := reader.ReadString(byte('\n'))
	filename = strings.TrimSpace(filename)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// open file
	file, err := os.Open(filename)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// read file line by line and append to names
	fscanner := bufio.NewScanner(file)
	names := make([]Name, 0)
	for fscanner.Scan() {
		fullName := fscanner.Text()
		namesSplit := strings.Split(fullName, " ")
		names = append(names, Name{fname: namesSplit[0], lname: namesSplit[1]})
	}

	// print each name in names
	for _, person := range names {
		fmt.Printf("fname: %s, lname: %s\n", person.fname, person.lname)
	}
}
