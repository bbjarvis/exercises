module SomeModule
  def some_method(message)
    puts (message)
  end
end

class SomeClass
  include SomeModule
end

new_object = SomeClass.new

new_object.some_method("SomeMessage")