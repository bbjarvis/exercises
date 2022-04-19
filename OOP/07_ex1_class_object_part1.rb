=begin
  Create a class called MyCar.
    When you initialize a new instance or object of the class,
      allow the user to define some instance variables that tell
      us the year, color, and model of the car. 
    Create an instance variable that is set to 0 during
      instantiation of the object to track the current speed of
      the car as well. 
    Create instance methods that allow the car to speed up,
      brake, and shut the car off.
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

  # def change_color (color)
  #   self.color = color
  #   puts "Your vehicle color is now #{@color}"
  # end

  # def see_year
  #   puts "You vehicle year is #{@year}"
  # end

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

end

mazda5 = MyCar.new(2013, 'Mazda5', 'grey')
mazda5.speed_up(50)
mazda5.current_speed
mazda5.brake(50)
mazda5.current_speed
mazda5.shut_off
mazda5.current_speed
mazda5.color = 'hot pink'
puts mazda5.color
puts mazda5.year