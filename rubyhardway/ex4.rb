cars = 100
space_in_a_car = 4.0
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
casrs_driven = drivers
carpool_capacity = casrs_driven * space_in_a_car
average_parrengers_per_car = passengers / casrs_driven

puts "There are #{cars} cars available."
puts "There are only #{drivers} drivers avaiblable."
puts "There will be #{cars_not_driven} empty cars today."
puts "We can transport #{carpool_capacity} people today."
puts "We have #{passengers} to carpool today."
puts "We need to put about #{average_parrengers_per_car} in each car."