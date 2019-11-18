package main

import "fmt"

func main() {
	var float float32
	fmt.Println("Enter a floating point number")
	_, err := fmt.Scanf("%f", &float)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Printf("Input as integer: %d", int(float))
	fmt.Println("Input length:", len(float))
}
