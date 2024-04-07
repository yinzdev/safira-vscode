struct Gemstone {
    let name: String
    let color: String
    let rarity: String
    
    // Method to describe the gemstone
    func describe() {
        print("The \(name) gemstone is a beautiful shade of \(color) and is \(rarity).")
    }
}

// Create a Gemstone instance
let myGemstone = Gemstone(name: "safira", color: "blue", rarity: "rare")

// Describe the gemstone
myGemstone.describe()
