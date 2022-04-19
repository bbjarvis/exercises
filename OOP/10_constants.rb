=begin
Here we used the constant DOG_YEARS to calculate the age
in dog years when we created the object, sparky. Note that
we used the setter methods in the initialize method to
initialize the @name and @age instance variables given
to us by the attr_accessor method. We then used the age
getter method to retrieve the value from the object.

DOG_YEARS is a variable that will never change for any
reason so we use a constant. It is possible to reassign
a new value to constants but Ruby will throw a warning.
=end

class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = a * DOG_YEARS 
  end

end

sparky = GoodDog.new('Sparky', 7)

puts sparky.age