=begin
Note: A common naming convention for Ruby is to use the "able"
suffix on whatever verb describes the behavior that the module
is modeling. You can see this convention with our Swimmable module.
Likewise, we could name a module that describes "walking" as Walkable.
Not all modules are named in this manner, however, it is quite common.
=end

module Swimmable
  def swim
    puts "I'm swimming!"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable
end

sparky = Dog.new
neemo = Fish.new
paws = Cat.new

sparky.swim   # "I'm swimming"
neemo.swim   # "I'm swimming"
paws.swim   # gives error cause cats don't swim