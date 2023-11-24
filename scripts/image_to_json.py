import os
import json
from googleapiclient.discovery import build

# Function to get file names and shareable links from the public folder
# AIzaSyDAfasACIIo_liUJWoy9P3oQvFs5Hrqxes
def get_image_links(folder_id):
    drive_service = build('drive', 'v3', developerKey='AIzaSyDAfasACIIo_liUJWoy9P3oQvFs5Hrqxes')
    page_token = None
    image_links = {}

    while True:
        results = drive_service.files().list(
            q=f"'{folder_id}' in parents",
            fields="nextPageToken, files(name, webViewLink)",
            pageSize=100,
            pageToken=page_token
        ).execute()

        files = results.get('files', [])
        for file in files:
            name = file['name']
            link = file['webViewLink']
            image_links[name] = link

        page_token = results.get('nextPageToken')
        if not page_token:
            break

    return image_links
# Function to save image links to a JSON file
def save_to_json(image_links, json_file_path):
    with open(json_file_path, 'w') as json_file:
        json.dump(image_links, json_file, indent=2)

# Replace 'your_folder_id' with the actual ID of your public Google Drive folder
folder_id = '1VJEz1hdFh_HtTCQj0NDnYehpwFVTJYt-'

# Get image links from the specified folder
image_links = get_image_links(folder_id)

# Specify the path where you want to save the JSON file
json_file_path = 'public/Standard.json'

# Save image links to the JSON file
save_to_json(image_links, json_file_path)

print(f'Image links saved to {json_file_path}')
