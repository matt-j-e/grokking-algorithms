# states_needed will be chipped away until the set is empty
states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

stations = {} # a hash table to store stations data
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

final_stations = set() # will be populated with chosen stations

while states_needed: # as long as states_needed contains items
  best_station = None # variable to hold station covering the most states that aren't already covered
  states_covered = set() # all states covered by the current best_station

  # In the construction of the loop below:
  # - stations.items() is an iterable of key/value pairs from the stations dictionary
  # - station, states_for_station assigns the key to station and the value to states_for_station
  for station, states_for_station in stations.items():
    # covered is a set that contains the result of a SET INTERSECTION between states_needed & states_for_station
    # ie. a set of states in both of the other sets
    covered = states_needed & states_for_station
    if len(covered) > len(states_covered): # if this station covers more than current best_station...
      best_station = station # ...update best_station
      states_covered = covered # ...and update its states_covered

  # after determining best_station for this loop...
  states_needed -= states_covered # ...remove states_covered from states_needed
  final_stations.add(best_station) # ...and add current best_station to list of final_stations

print(final_stations)