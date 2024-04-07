#include <stdio.h>

// Define a structure for Gemstone
struct Gemstone {
    char name[20];
    char color[20];
    char rarity[20];
};

// Function to describe the gemstone
void describeGemstone(struct Gemstone gemstone) {
    printf("The %s gemstone is a beautiful shade of %s and is %s.\n", gemstone.name, gemstone.color, gemstone.rarity);
}

int main() {
    // Create a Gemstone object
    struct Gemstone myGemstone = {"safira", "blue", "rare"};

    // Describe the gemstone
    describeGemstone(myGemstone);

    return 0;
}
