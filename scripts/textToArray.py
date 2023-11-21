# Open the file in read mode
file_path = 'tokens.txt'  # Replace 'your_file.txt' with the path to your text file
with open(file_path, 'r') as file:
    # Read and print each line in the file
    for line in file:
        # print("\""+line.strip()+"\",")  # Use strip() to remove leading and trailing whitespaces (including newline characters)
        print("https://tedxmite-ticket-portal.onrender.com/tickets/"+line.strip())
