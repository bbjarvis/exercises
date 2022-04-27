module Walkable
  def walk
    puts "I'm walking."
  end
end

module Swimmable
  def swim
    puts "I'm swimming."
  end
end

module Climbable
  def climb
    puts "I'm climbing."
  end
end

class Animal
  include Walkable

  def speak
    puts "I'm an animal, and I speak!"
  end
end

class GoodDog < Animal
  include Swimmable
  include Climbable
end

puts "---GoodDog method lookup---"
puts GoodDog.ancestors

# fido = Animal.new
# fido.speak                  # => I'm an animal, and I speak!
# fido.walk                   # => I'm walking.
# fido.swim
  # => NoMethodError: undefined method `swim' for #<Animal:0x007f92832625b0>

# puts "---Animal method lookup---"
# puts Animal.ancestors

