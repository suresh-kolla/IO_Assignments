
def add_solution(solutions, a,b, flag):
    
    if flag:
        solutions[a] = []

    for soln in solutions.get(a - Time[b], []):
        temp = soln.copy() 
        temp[b] = temp[b] + 1
        print("hello"+temp)
        solutions.get(a, []).append(temp)
    
    if solutions.get(a - Time[b]) is None:
        new_array = [0,0,0]
        new_array[b] = 1
        solutions.get(a, []).append(new_array)
        
    return solutions
        
    
def find_max_earning(time_units, n, earnings, Time):  
    dp = [0 for i in range(time_units + 1)]
    solutions = {}

    for i in range(time_units + 1): 
		    for j in range(n): 
			      if (Time[j] < i):
			          flag = dp[i] < dp[i - Time[j]] + earnings[j]*(i-Time[j])
			          print(flag)
			          print(i)
			          if dp[i] <= dp[i - Time[j]] + earnings[j]*(i-Time[j]):
			              dp[i] = dp[i - Time[j]] + earnings[j]*(i-Time[j])
			              print(dp)
			              solutions = add_solution(solutions, i, j, flag)
			              
    
    for soln in solutions.get(time_units, []):
        print("P:"+str(soln[0])+" T:"+str(soln[1])+" CP:"+str(soln[2]))

    print("Maximum Earnings: ",dp[time_units])
 
earnings = [1000, 1500, 3000] 
Time = [4, 5, 10] 
n = len(earnings) 
time_units = int(input('Enter Period of Time: '))
find_max_earning(time_units, n, earnings, Time) 

