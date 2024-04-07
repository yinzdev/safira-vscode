#include <iostream>
#include <string>

// Define a class for Gemstone
class Gemstone {
public:
    // Constructor
    Gemstone(const std::string& name, const std::string& color, const std::string& rarity) 
        : name(name), color(color), rarity(rarity) {}

    // Method to describe the gemstone
    void describe() const {
        std::cout << "The " << name << " gemstone is a beautiful shade of " << color << " and is " << rarity << "." << std::endl;
    }

private:
    std::string name;
    std::string color;
    std::string rarity;
};

int main() {
    // Create a Gemstone object
    Gemstone myGemstone("safira", "blue", "rare");

    // Describe the gemstone
    myGemstone.describe();

    return 0;
}
