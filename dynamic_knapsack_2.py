# NB Weights must be whole numbers.
items = [
  {"name": "guitar", "weight": 1, "price": 1500},
  {"name": "stereo", "weight": 4, "price": 3000},
  {"name": "laptop", "weight": 3, "price": 2000},
  {"name": "iPhone", "weight": 1, "price": 2000},
  {"name": "mp3", "weight": 1, "price": 1000}
]

capacity = 4 # Knapsack capacity

increment = float("inf")
for item in items:
  if item["weight"] < increment:
    increment = item["weight"]

num_cols = int(capacity / increment)

knapsack = []
for row, item in enumerate(items):
  knapsack.append([])
  for col in range(num_cols):
    knapsack[row].append([])
    col_max_capacity = (col * increment) + increment
    if row == 0:
      if item["weight"] <= col_max_capacity:
        knapsack[row][col].append(item)
      else:
        knapsack[row][col].append({"name": None, "price": 0})
    else:
      prev_max = knapsack[row-1][col]
      prev_max_value = 0
      for pm_item in prev_max:
        prev_max_value += pm_item["price"]
      if item["weight"] <= col_max_capacity:
        addnl_capacity = col_max_capacity - item["weight"]
        if addnl_capacity > 0:
          addnl_capacity_value = 0
          for ac_item in knapsack[row - 1][int(addnl_capacity / increment) - 1]:
            addnl_capacity_value += ac_item["price"]
          if (addnl_capacity_value + item["price"]) > prev_max_value:
            knapsack[row][col].append(item)
            for addnl_item in knapsack[row - 1][int(addnl_capacity / increment) - 1]:
              knapsack[row][col].append(addnl_item)
          else:
            knapsack[row][col] = prev_max
        else:
          if item["price"] > prev_max_value:
            knapsack[row][col].append(item)
          else:
            knapsack[row][col] = prev_max
      else:
        knapsack[row][col] = prev_max


print("\nOPTIMAL COMBINATION\n-------------------")
optimal_combination = knapsack[len(knapsack)-1][num_cols - 1]
total_value = 0
for item in optimal_combination:
  total_value += item["price"]
  print(item["name"], "\t", item["price"])
print("Total\t", total_value)
