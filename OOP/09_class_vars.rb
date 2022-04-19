=begin

We have a class variable called @@number_of_dogs, which we
initialize to 0. Then in our constructor (the initialize method),
we increment that number by 1. Remember that initialize gets
called every time we instantiate a new object via the new method.
This also demonstrates that we can access class variables from
within an instance method (initialize is an instance method).
Finally, we just return the value of the class variable in the
class method self.total_number_of_dogs. This is an example of
using a class variable and a class method to keep track of a
class level detail that pertains only to the class, and not
to individual objects.
=end

class GoodDog
  @@number_of_dogs =0

def initialize
  @@number_of_dogs += 1
end

def self.total_number_of_dogs
  @@number_of_dogs
end

end

puts GoodDog.total_number_of_dogs

dog1 = GoodDog.new
dog2 = GoodDog.new

puts GoodDog.total_number_of_dogs