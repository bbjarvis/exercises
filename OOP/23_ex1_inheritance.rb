=begin
  Add a class method to your MyCar class that calculates the gas mileage of any car.
=end

module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end
class Vehicle
  attr_accessor :color
  attr_reader :year, :model

  @@number_of_vehicles = 0

  def initialize (year, model, color)
    @year = year
    @color = color
    @model = model
    @speed = 0
    @@number_of_vehicles += 1
  end

  def self.total_number_of_vehicles
    puts "#{@@number_of_vehicles} vehicles created"
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
  
  def spray_paint(color)
    self.color = color
    puts "Your new #{color} paint job looks great!"
  end

  def age
    p "You #{self.model} is #{years_old} years old."
  end

  private

  def years_old
    Time.now.year - self.year
  end
end

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4

  def to_s
    "Your car is a #{color} #{year} #{@model}"
  end
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2
  include Towable
  def to_s
    "Your car is a #{color} #{year} #{@model}"
  end
end



lumina = MyCar.new(1997, 'chevy lumina', 'white')

lumina.age
# lumina.speed_up(20)
# lumina.current_speed
# lumina.speed_up(20)
# lumina.current_speed
# lumina.brake(20)
# lumina.current_speed
# lumina.brake(20)
# lumina.current_speed
# lumina.shut_off
# MyCar.mileage(13, 351)
# lumina.spray_paint("red")
# puts lumina

# puts MyCar.ancestors
# puts MyTruck.ancestors
# puts Vehicle.ancestors