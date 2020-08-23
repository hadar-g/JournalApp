import sys

file = open(sys.argv[1], 'r')

output = open("prompts.json", "w")

i = 0

for line in file:
    string ="prompts"+str(i) +  ":[ \"" +  line.rstrip() +  "\" , \"\" ],"
    output.write(string+ '\n')
    i += 1
