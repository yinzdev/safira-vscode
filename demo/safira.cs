using System;

class Gemstone
{
    public string Name { get; set; }
    public string Color { get; set; }
    public string Rarity { get; set; }

    public Gemstone(string name, string color, string rarity)
    {
        Name = name;
        Color = color;
        Rarity = rarity;
    }

    // Method to describe the gemstone
    public void Describe()
    {
        Console.WriteLine($"The {Name} gemstone is a beautiful shade of {Color} and is {Rarity}.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create a Gemstone object
        Gemstone myGemstone = new Gemstone("safira", "blue", "rare");

        // Describe the gemstone
        myGemstone.Describe();
    }
}
