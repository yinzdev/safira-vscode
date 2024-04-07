public class Gemstone {
    private String name;
    private String color;
    private String rarity;

    // Constructor
    public Gemstone(String name, String color, String rarity) {
        this.name = name;
        this.color = color;
        this.rarity = rarity;
    }

    // Method to describe the gemstone
    public void describe() {
        System.out.println("The " + name + " gemstone is a beautiful shade of " + color + " and is " + rarity + ".");
    }

    public static void main(String[] args) {
        // Create a Gemstone object
        Gemstone myGemstone = new Gemstone("safira", "blue", "rare");

        // Describe the gemstone
        myGemstone.describe();
    }
}
