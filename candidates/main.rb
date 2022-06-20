# This is the main entrypoint into the program
# It requires the other files/gems that it needs
require 'pp'
require './candidates'
require './filters'

## Your test code can go here

# pp @candidates

# testing experienced?
puts "****  Testing experienced?()  ****"
@candidates.each do |candidate| 
  pp experienced?(candidate)
end

# testing find
puts "****  Testing find()  ****"
pp find(5)
pp find(9)
pp find(15)
pp find(20)

# testing qualified_candidates
puts "****  Testing qualified_candidates()  ****"
pp qualified_candidates(@candidates)

# testing ordered_by_qualifications
puts "****  Testing ordered_by_qualification()  ****"
pp ordered_by_qualifications(@candidates)