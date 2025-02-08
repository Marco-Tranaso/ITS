import copy 
original=[[1,2], [3,366]]
shallow = original[:]

#deep copy

deep=copy.deepcopy(original)

shallow.append(5)
print((original))
print(shallow)
print(deep)