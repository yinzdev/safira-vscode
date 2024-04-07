interface Gemstone {
  name: string;
  color: string;
  rarity: string;
}

function describeGemstone(gemstone: Gemstone) {
  console.log(
    `The ${gemstone.name} gemstone is a beautiful shade of ${gemstone.color} and is ${gemstone.rarity}.`,
  );
}

const myGemstone: Gemstone = {
  name: 'safira',
  color: 'blue',
  rarity: 'rare',
};

describeGemstone(myGemstone);

const yGemstone: Gemstone = {
  name: 'safira',
  color: 'blue',
  rarity: 'rare',
};
