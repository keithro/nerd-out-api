
## Models

player
- name
- location (city, st)
- highScore
- totalScore
- gamesPlayed

Lifetime High Score
- [{highScore, player.id}]

Daily High Score

Most Games Played


## Routes
# ** EDIT THESES **

### Player
| Type | Route | Name | Description | Protected/Private |
| --- | :---: | :---: | :---: | :---: |
| POST | /auth/register | Register| register new user and send token | No |
| POST | /auth/ | Auth User| Decode token and get current user | Yes |
| GET | /auth/login | Login| Login user and send token | No |

### Leaderboard
| Type | Route | Name | Description | Protected/Private |
| GET | /leaderboard/ | Get Leaderboard | Any player can see leaderboard | No |
| POST | /leaderboard/ | Create Leaderboard | User can create a new event | Yes |
| GET | /leaderboard/:id | Get One Event | Get one event by id | No |
| PUT | /leaderboard/:id | Update Event| Logged in user can edit their leaderboard | Yes |
| DELETE | /leaderboard/:id | Delete Event | Users can delete their own leaderboard | Yes |
