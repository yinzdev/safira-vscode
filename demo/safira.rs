struct Gemstone {
    name: String,
    color: String,
    rarity: String,
}

impl Gemstone {
    fn describe(&self) {
        println!("The {} gemstone is a beautiful shade of {} and is {}.", self.name, self.color, self.rarity);
    }
}

fn main() {
    // Create a Gemstone instance
    let my_gemstone = Gemstone {
        name: String::from("safira"),
        color: String::from("blue"),
        rarity: String::from("rare"),
    };

    // Describe the gemstone
    my_gemstone.describe();
}
