=begin
  Add a class method to your MyCar class that calculates the gas mileage of any car.
=end

class MyCar
  attr_accessor :color
  attr_reader :year

  def initialize (year, model, color)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def self.mileage(gallons, miles)
    puts "#{miles/gallons} miles per gallon of gas"      
  end

  def speed_up(number)
    @speed += number
    puts "You accelerate #{number} mph."
  end

  def brake(number)
    @speed -= number
    puts "You decelerate #{number} mph."
  end

  def shut_off
    @speed = 0
    puts "Your car is stopped."
  end

  def current_speed
    puts "You speed is currently #{@speed} mph."
  end

  def to_s
    "Your car is a #{color} #{year} #{@model}"
  end

end

# MyCar.mileage(30, 150)

mazda5 = MyCar.new('2013', 'Mazda5', "grey")

puts mazda5