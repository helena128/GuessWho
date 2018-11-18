import random

filepath = "guess.txt"

def generateNumbers(maxNumber):
	numbers = []
	for i in range(4):
		numbers.append(random.randint(0, maxNumber - 1))
	#print (numbers)
	return numbers

def getPeopleNames(numOfLines):
	numbers = generateNumbers(numOfLines)
	people = []
	with open(filepath) as fp:  
		lines = fp.readlines()
	for i in range(4):
		people.append(lines[numbers[i]].rstrip())
	#print (people)
	return people
		

if __name__ == '__main__':
	getPeopleNames(10)