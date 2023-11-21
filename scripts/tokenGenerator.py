import random
import string

def generate_random_text(length):
    # Generate a random string of uppercase letters and digits
    characters = string.ascii_uppercase + string.digits
    random_text = ''.join(random.choice(characters) for _ in range(length))
    return random_text

if __name__ == "__main__":
    num_texts = 400
    text_length = 4
    
    # Generate random texts
    random_texts = [generate_random_text(text_length) for _ in range(num_texts)]
    
    # Print the generated random texts
    inc = 1
    for text in random_texts:
        # print("\""+str(inc)+'-'+text+"\": "+str(inc)+",")
        print(str(inc)+'-'+text)
        inc = inc + 1
