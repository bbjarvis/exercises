class GoodDog
  # attr_reader is for getting no setter, attr_writer is for setter, not getter
  # attr_* methods take a Symbol(s) as parameters

  attr_accessor :name , :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end
  # by removing the "@" we are now calling the getter method
  def speak
    "#{name} says Arf!"
  end

  # allows the changing of attributes
  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  # allow showing what the attirbutes are
  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end
  
end

sparky = GoodDog.new("Sparky", "12 inches", "10 lbs")
puts sparky.speak
puts sparky.info
sparky.change_info('Sparticus', '24 inches', '45 lbs')
puts sparky.info