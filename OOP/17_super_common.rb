class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

# the "<" sybol signifies that the GoodDog class is inheriting from Animal
class GoodDog < Animal
  #  using "super" to invoke the speak method from the superclass, Animal,
  #  and then we extend the functionality by appending some text to the return value
  def initialize(name, color)
    super(name)
    @color = color
  end
end

sparky = GoodDog.new("Sparky", "brown")
p sparky