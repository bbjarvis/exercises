class Animal
  def speak
    "Hello"
  end
end

# the "<" sybol signifies that the GoodDog class is inheriting from Animal
class GoodDog < Animal
  #  using "super" to invoke the speak method from the superclass, Animal,
  #  and then we extend the functionality by appending some text to the return value
  def speak
    super + " from GoodDog class"
  end
end

sparky = GoodDog.new
puts sparky.speak
