def add(a, b)
  puts "ADDING #{a} + #{b}"
  return a + b 
end

def subtract(a, b)
  puts "subtract #{a} - #{b}"
  return a - b 
end

def multiply(a, b)
  puts "multiply #{a} * #{b}"
  return a * b 
end

def dividing(a, b)
  puts "dividing #{a} / #{b}"
  return a / b 
end

puts "Let's do some math with just functions!"

  age = add(30, 6)
  height = subtract(78, 8)
  weight = multiply(25, 9)
  iq = dividing(100, 2)

  puts "Age: #{age}\nHeight: #{height}\nWeight: #{weight}\niq: #{iq}"

# A puzzle for extra credit, type it anyways
puts "Here is a puzzle."

what = add(age, subtract(height, multiply(weight, dividing(iq, 2))))

puts "That becomes: #{what}. Can you do it by hand?"