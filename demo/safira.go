package main

import "fmt"

// Define a struct for Gemstone
type Gemstone struct {
    name   string
    color  string
    rarity string
}

// Method to describe the gemstone
func (g Gemstone) describe() {
    fmt.Printf("The %s gemstone is a beautiful shade of %s and is %s.\n", g.name, g.color, g.rarity)
}

func main() {
    // Create a Gemstone object
    myGemstone := Gemstone{name: "safira", color: "blue", rarity: "rare"}

    // Describe the gemstone
    myGemstone.describe()
}
