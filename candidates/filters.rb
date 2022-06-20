# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  # Takes in an id
  # Returns the candidate with that :id
  # If there is no candidate with that id,
  # it naturally returns nil
  @candidates.each do |candidate|
    if candidate[:id] == id
      return candidate
    end
  end
  return nil
end

def experienced?(candidate)
  # Takes in a single candidate (hash). Note: not the array.
  # Returns true if the candidate has 2 years of experience 
  # or more returns false otherwise
  if candidate[:years_of_experience] >= 2
    return true
  end
  return false
end

def qualified_candidates(candidates)
  # return subset that qualify
  qualified_candidates = []
  candidates.each do |candidate|
    # Are experienced
    # Have 100 or more Github points
    # Know at least Ruby or Python
    # Are over the age of 17 (18+)

    if experienced?(candidate) && github_points?(candidate) && ruby_python?(candidate) && of_age?(candidate)
      qualified_candidates.push(candidate)
    end
  
  end
  return qualified_candidates
end

# More methods will go below
def ordered_by_qualifications(candidates)
  # Takes in a collection of candidates
  # Instead of filtering on the candidates,
  # returns them all back but reordered such that:
    # Candidates with the most experience are at the top
    # For Candidates that have the same years of experience,
    # they are further sorted by their number of Github
    # points (highest first)
  candidates.sort_by!{ |a| [a[:years_of_experience], a[:github_points]]}

  return candidates
end

def github_points?(candidate)
  # Takes in a single candidate (hash). Note: not the array.
  # Returns true if the candidate has 100 github points 
  # or more returns false otherwise
  if candidate[:github_points] >=100
    return true
  end
  return false
end

def ruby_python?(candidate)
  # Takes in a single candidate (hash). Note: not the array.
  # Returns true if the candidate has at leas Ruby or Python 
  # returns false otherwise
  
  if candidate[:languages].include?('Ruby'||'Python')
    return true
  end
  return false
end

def applied_recent?(candidate)
  # Takes in a single candidate (hash). Note: not the array.
  # Returns true if the candidate has 100 github points 
  # or more returns false otherwise
  
  if candidate[:date_applied] >=15
    return true
  end
  return false
end

def of_age?(candidate)
  # Takes in a single candidate (hash). Note: not the array.
  # Returns true if the candidate has 100 github points 
  # or more returns false otherwise
  
  if candidate[:age] > 17
    return true
  end
  return false
end
