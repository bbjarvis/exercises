class Parent
  def say_hi
    p "Hi from Parent."
  end
end

p Parent.superclass       # => Object

class Child < Parent
  def say_hi
    p "Hi from Child."
  end
end

child = Child.new
child.say_hi         # => "Hi from Child."