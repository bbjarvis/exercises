class GoodDog
  # attr_reader is for getting no setter, attr_writer is for setter, not getter
  # attr_* methods take a Symbol(s) as parameters, if more, do more:
    # attr_accessor :name, :height, :weight

  attr_accessor :name

  def initialize(name)
    @name = name
  end
  # by removing the "@" we are now calling the getter method
  def speak
    "#{name} says Arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name
sparky.name = "Sparticus"
puts sparky.speak

fido = GoodDog.new("Fido")
puts fido.speak
puts fido.name