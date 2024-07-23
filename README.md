# Component Structure

- Header
  - Body
    - Sidebar
    - VideoContainer
      - VideoCard
  - WatchVideo
    - VideoPlayer
    - RecommendedVideo
    - ChannelInfo
    - Comment

# suggestion suggestion cache

# 1 create slice for storing suggestion in redux

- suggestionSlice
  - state : { keyword : response}
  - reducer : addSuggestion({keyword : response})

# 2 retrieve suggestion before fetching

    - if not already present then add suggestion
