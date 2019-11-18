package main

import (
	"fmt"
	"os"
	"sort"
	"strconv"
)

/**
Write a program which prompts the user to enter integers and stores the integers in a sorted slice.
The program should be written as a loop. Before entering the loop, the program should create an
empty integer slice of size (length) 3. During each pass through the loop, the program prompts the
user to enter an integer to be added to the slice. The program adds the integer to the slice, sorts
the slice, and prints the contents of the slice in sorted order. The slice must grow in size to
accommodate any number of integers which the user decides to enter. The program should only quit
(exiting the loop) when the user enters the character ‘X’ instead of an integer.
*/
func main() {
	intSlice := make([]int, 3)

	for {
		// get input from user
		var s string
		fmt.Println("Please enter an integer (enter 'X' to exit)")
		_, err := fmt.Scanln(&s)
		if err != nil {
			fmt.Println("Error:", err)
		}

		// exit if input is 'x'
		if s == "X" {
			fmt.Println("Exiting program")
			os.Exit(0)
		}

		// convert input to integer
		sInt, err := strconv.Atoi(s)
		if err != nil {
			fmt.Println("Error reading integer")
		}

		// add int to slice, sort slice, and then print
		intSlice = append(intSlice, sInt)
		sort.Slice(intSlice, func(i, j int) bool {
			return intSlice[i] < intSlice[j]
		})
		fmt.Println(intSlice)
	}
}
