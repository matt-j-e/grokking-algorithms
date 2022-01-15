prices = {}
prices["stereo"] = 3000
prices["laptop"] = 2000
prices["guitar"] = 1500
prices["iPhone"] = 2000
# prices["mp3"] = 1000

weights = {}
weights["stereo"] = 4
weights["laptop"] = 3
weights["guitar"] = 1
weights["iPhone"] = 1
# weights["mp3"] = 1

capacity = 4

items = list(prices.keys())

lightest = float("inf")
for weight in weights.values():
  if weight < lightest:
    lightest = weight

num_cols = int(capacity / lightest)

print(num_cols)
print(items)

knapsack = []
for row in range(len(items)):
  knapsack.append([])
  for col in range(num_cols):
    knapsack[row].append({})
    sub_capacity = (col * lightest) + lightest
    if row == 0:
      cell = {}
      cell["items"] = []
      cell["value"] = 0
      if weights[items[row]] <= sub_capacity:
        cell["items"] = [items[row]]
        cell["value"] = prices[items[row]]
      knapsack[row][col] = cell
    if row > 0:
      prev_max = knapsack[row-1][col]
      prev_max_value = 0
      if "value" in prev_max.keys():
        prev_max_value = prev_max["value"]
      this_value = 0
      topup_value = 0
      if weights[items[row]] <= sub_capacity:
        topup_amount = sub_capacity - weights[items[row]]
        if topup_amount > 0:
          topup_value = knapsack[row-1][int(topup_amount / lightest) - 1]["value"]
        current_item_value = prices[items[row]]
        this_value = topup_value + current_item_value
      if this_value > prev_max_value:
        cell = {}
        cell["items"] = [items[row]]
        cell["value"] = prices[items[row]]
        if topup_value > 0:
          cell["items"] += knapsack[row-1][int(topup_amount / lightest) - 1]["items"]
          cell["value"] += topup_value
        knapsack[row][col] = cell
      else:
        knapsack[row][col] = knapsack[row-1][col]

for row in knapsack:
  print(row)

print("Optimal item pick =", knapsack[len(knapsack)-1][num_cols - 1])