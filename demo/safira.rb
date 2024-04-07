class Gemstone
  def initialize(props)
    @name = props[:name]
    @color = props[:color]
    @rarity = props[:rarity]
  end

  # Method to describe the gemstone
  def describe
    puts "The #{@name} gemstone is a beautiful shade of #{@color} and is #{@rarity}."
  end
end

# Create an object of the Gemstone class using props
my_gemstone = Gemstone.new({
  name: "safira",
  color: "blue",
  rarity: "rare"
})

# Describe the gemstone using object method
my_gemstone.describe
