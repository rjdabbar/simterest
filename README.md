# Simterest -- simulate your interests!

Mimimum Project:

- Create accounts
- Create sessions
- Pick topics to follow
- Create boards
- Create pins
- View boards and their pins
- Follow Boards, Users, Topics
- Search for topics/tags
- View a feed of followed items
- Create comments on pins

[Wireframes](http://imgur.com/a/CPUkg)


## Phase 1 (~1day): Users/Session control, Board Creation
  Using a rails backend to control sessions and user auth I'll build a simple sign in/sign up app that allows users to create boards for their sims! I'll get this simple CRUD app running on heroku so that moving forward I can test things there.

## Phase 2 (~2 days): Pin creation and assignment
  During this phase I'll start working on Backbone models and collections with API routes to get everything working on the frontend. After this phase users should be able to view their boards with pins on them

## Phase 3 (~2-3 days): Concerns: Tagable, Searchable, Followable
  This phase will be concerned with concerns. Making sure boards/pins/topics are searchable, taggable and followable will increase the functionality of the app and streamline user experience. I'll need to do some good work on the model side to make sure these funtions works properly.

## Phase 4: (~2 days) Comments
  Adding comments to pins is one of the bigger social features of the app. Pins should be viewed in modal windows at this stage and comments will flow beneath the image.

## Phase 5 (~1-2 days): Styling
 Along the way I plan to implement simple styling, mostly layout features, saving the specifics until I have most of the bigger moving parts in place. This phase will consist of cleaning up the CSS and making sure the app looks as clean as possible.


## Models
  * Users
  * Boards
  * Pins
  * Tags
  * Comments



## Users:
```
              DB:
              string: username
              string: password_digest
              string: session_token
```
### User Associations
  * has many boards
  * has many collaborated_boards (board)
  * has many pins through boards
  * has many followers
  * has many followed_topics (tags)
  * has many followed_boards (boards)
  * has many followed_pinners (users)

### User Funtionality
  * Users can sign up
  * Users can sign in (create session)
  * Users can sign out (destroy session)
  * Users can CRUD boards
  * Users can CRUD pins
  * Users can be followed
  * Users can follow boards
  * Users can follow categories
  * Users can collaborate on boards


## Boards:
```
            DB:
            string : title
            text   : description
            string : category
            integer: creator_id (user)
            boolean: secret
```
### Board Associations
  * is taggable
  * belongs to user
  * has many pins
  * has many tags

### Board Functionality
  * Boards can be pinned to
  * Boards can be secret (private/invitation to view)
  * Boards can be followed


## Pin
```
            DB:
            string : title
            text   : description
            integer: pinner_id (user)
            integer: board_id
            string : image_url
            string : source_url
            string : image_alt
            integer: via_user_id (user)
```
### Pin Associations
  * belongs to user
  * belongs to board
  * has many comments

### Pin functionality
  * Pins are pinned to boards
  * Pins have an image

## Comment
```
            DB:
            integer: author_id (user)
            text   : body
            integer: pin_id
```
### Comment Associations
  * belongs to user
  * belongs to pin

### Comment Functionality
  * Comments can be written on pins
  * Comments have text and can be edited

## Tags/Category
```
            DB:
            string: name
```
### Tag Associations
  * belongs to board
  * belongs to pin

### Tag Functionality
  * Tags can be searched by.
  * Tags can be followed
  * Tags can be put on boards and pins

## Follows
```
          DB:
          integer: follower_id (user)
          integer: followee_id (board/tag/user) (polymorphic)
```
### Follow Associations
  * Follows belong to users

### Follow Functionality
  * Follows are for boards, users, and tags
