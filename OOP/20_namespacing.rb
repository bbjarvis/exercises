# namespacing means organizing similar classes under a module

module Mammal
  class Dog
    def speak(sound)
      p "#{sound}"
    end
  end

  class Cat
    def say_name(name)
      p "#{name}"
    end
  end
=begin
  container for methods, called module methods involves using modules to house other methods.
  This is very useful for methods that seem out of place within your code.
  Let's use our Mammal module to demonstrate:
=end
  def self.some_out_of_place_method(num)
    num ** 2
  end
end

# We call classes in a module by appending the class name to the module name with two colons(::)
buddy = Mammal::Dog.new
kitty = Mammal::Cat.new
buddy.speak('Arf!')
kitty.say_name('kitty')

# calling module methods, both work, first is preferred
p value = Mammal.some_out_of_place_method(4)
p value = Mammal::some_out_of_place_method(4)