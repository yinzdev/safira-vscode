class Gemstone {
  String name;
  String color;
  String rarity;

  // Constructor
  Gemstone(this.name, this.color, this.rarity);

  // Method to describe the gemstone
  void describe() {
    print('The $name gemstone is a beautiful shade of $color and is $rarity.');
  }
}

void main() {
  // Create a Gemstone object
  var myGemstone = Gemstone('safira', 'blue', 'rare');

  // Describe the gemstone
  myGemstone.describe();
}
