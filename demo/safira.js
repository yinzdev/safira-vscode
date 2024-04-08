// Safira Theme Showcase
class Gemstone {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.rarity = props.rarity;
  }

  describe() {
    console.log(
      `The ${this.name} gemstone is a beautiful shade of ${this.color} and is ${this.rarity}.`,
    );
  }
}

const myGemstone = new Gemstone({
  name: 'safira',
  color: 'blue',
  rarity: 'rare',
});

// Describe the gemstone
myGemstone.describe();

const Safira = new Theme({
  category: 'Dark',
  style: ['Minimalistic', 'Modern'],
  release: 2024,
});
