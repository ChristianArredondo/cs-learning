package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

/**
Write a program which prompts the user to first enter a name,
and then enter an address. Your program should create a map
and add the name and address to the map using the keys “name”
and “address”, respectively. Your program should use Marshal()
to create a JSON object from the map, and then your program
should print the JSON object.

Submit your source code for the program, “makejson.go”.
*/
func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Please enter your name")
	name, _ := reader.ReadString(byte('\n'))
	fmt.Println("Please enter your address")
	address, _ := reader.ReadString(byte('\n'))

	p := map[string]string{"name": strings.TrimSpace(name), "address": strings.TrimSpace(address)}
	pjson, err := json.Marshal(p)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	fmt.Println(string(pjson))
}
