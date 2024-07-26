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


# Live Chat

  # 1 API polling
  - fetch the chat data on an interval (e.g. 1500ms)

  # 2 Add those chat to Redux
  - chatSlice
    - state : [{name: "user name", chat: "Hello"}]
    - reducer : addChat({name: "name", chat: "Hello"})
    - Limit chat to only have certain number of chat (e.g. 25 chats)

  # 3 Show it on the UI
  - Let user add chat 
  - show chat from bottom to top