class Person:
    def __init__(self, living, age, gender):
        self.living =living
        self.age = age
        self.gender = gender
        
    def getGender(self):
        print(self.gender)

    def __str__(self):
        a = str(self.living) + str(self.age) + self.gender
        return a

cody = Person(True, 33, 'male')
cody.getGender()
print(cody)