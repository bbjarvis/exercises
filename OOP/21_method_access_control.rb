# Private methods within classes

class GoodDog


  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = a
  end
  # can't call private methods directly, but they can be used in a public part of class
  # can only be used from inside class when called without "self"
  def public_disclosure
    p "#{self.name} in human years is #{human_years}"
  end

  private

  def human_years
    age * DOG_YEARS
  end
end

sparky = GoodDog.new("Sparky", 4)
sparky.public_disclosure

# protected method within class

class Animal
  # we can call a protected method from within the class, even with "self" prepended
  # it cannot be called outside of the class though
  def a_public_method
    p "Will this work? " + self.a_protected_method
  end

  protected

  def a_protected_method
    p "Yes, I'm protected!"
  end
end

fido = Animal.new
fido.a_public_method        # => Will this work? Yes, I'm protected!