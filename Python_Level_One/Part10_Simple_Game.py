###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################
import random
# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!
#==============================================================================
def test_code(digits, userGuess):
    li = list(digits)
    #print (li)
    #print (userGuess)
    if li[0] == userGuess[0] and li[1] == userGuess[1] and li[2] == userGuess[2]:
        print("CODE BROKEN")
        return 0
    if li[0] == userGuess[0]:
        print("Match")
    elif li[1] == userGuess[1]:
        print("Match")
    elif li[2] == userGuess[2]:
        print("Match")
    elif li[0] == userGuess[1] or li[0] == userGuess[2] or li[1] == userGuess[2]:
        print("Close")
    else:
        print("Nope")
    return 1
#==============================================================================
code = [str(num) for num in range(10)]
random.shuffle(code)
code = code[:3]
win = 1

print("Welcome Code Breaker! Let's see if you can guess my 3 digit number!")
#print(guess)
while(win):
    guess = list(input("What is your guess? "))
    win = test_code(code, guess)
