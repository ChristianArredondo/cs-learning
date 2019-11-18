package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

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
