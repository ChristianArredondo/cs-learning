package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

/*
- prompts user to enter string in quotation marks
- ignores case
- checks if string starts with letter "i"
- checks if string ends with letter "n"
- checks if string contains letter "a"
- if all criteria are met, prints "Found", else "Not Found"
- Example: "i dlf js a N" // Found
- Example: "i skfskdf a N " // Not Found
*/
func main() {
	scanWithBuffer()
}

func scanWithQuotes() {
	fmt.Println("Please enter a string with quotation marks")

	var input string
	_, err := fmt.Scanf("%q", &input)

	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	var inputAsLower string = strings.ToLower(input)
	var startsWithI bool = strings.HasPrefix(inputAsLower, "i")
	var endsWithN bool = strings.HasSuffix(inputAsLower, "n")
	var containsA bool = strings.Contains(inputAsLower, "a")

	if !startsWithI || !endsWithN || !containsA {
		fmt.Println("Not Found")
		return
	}

	fmt.Println("Found!")
}

func simpleScan() {
	fmt.Println("Simple scan, enter some text\n")

	var input string
	_, err := fmt.Scanln(&input)
	if err != nil {
		fmt.Println("Error:", err)
	}
	fmt.Println(input)
}

func scanWithBuffer() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter Text:")
	input, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	var lowercase string = strings.ToLower(input[:len(input)-1])
	if !strings.HasPrefix(lowercase, "i") || !strings.HasSuffix(lowercase, "n") || !strings.Contains(lowercase, "a") {
		fmt.Println("Not Found!")
		return
	}

	fmt.Println("Found!")
}
