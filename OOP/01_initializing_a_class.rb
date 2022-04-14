module Speak
  def speak(sound)
    puts sound
  end 
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

puts ''
puts "---GoodDog ancestors---"
puts GoodDog.ancestors
puts ''
puts "---HumanBeing ancestors---"
puts HumanBeing.ancestors

puts ''

sparky = GoodDog.new
sparky.speak("Arf!")

bob = HumanBeing.new
bob.speak("Hello!")