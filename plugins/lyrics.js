from azapi import AZlyrics

# Initialize API
api = AZlyrics()

# Set artist and song title
api.artist = "Taylor Swift"
api.title = "Blank Space"

# Get lyrics and save to file
api.getLyrics(save=True)
