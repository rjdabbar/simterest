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

(i have wireframes in my notebook)


## Day 1: Users/Session control, Board Creation
  users can sign up and in, see their profile page, and create boards

## Day 2-3: Pin creation and assignment
  users can manage their boards and pins through CRUD actions

## Day 4-5: Concerns: Tagable and Searchable
  pins and boards are tagable and searchable

## Day 6: 

Models
  Users
  Boards
  Pins
  Tags
  Comments



Root:

  displays all follows pins

### Users:
```
              DB:
              string: username
              string: password_digest
              string: session_token
```

  * has many boards
  * has many pins through boards
  * has many followers
  * has many followed_topics (tags)
  * has many followed_boards (boards)
  * has many followed_pinners (users)


  * Users can sign up
  * Users can sign in (create session)
  * Users can sign out (destroy session)
  * Users can CRUD boards
  * Users can CRUD pins
  * Users can be followed
  * Users can follow boards
  * Users can follow categories


### Boards:
```
            DB:
            string : title
            text   : description
            string : category
            integer: creator_id (user)
            integer: collaborator_id (user)
            boolean: secret
```
  * is taggable
  * belongs to user
  * has many pins
  * has many tags

  * Boards can be pinned to
  * Boards can be secret (private/invitation to view)
  * Boards can be followed


### Pin
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
  * belongs to user
  * belongs to board
  * has many comments

  * Pins are pinned to boards
  * Pins have an image

### Comment
```
            DB:
            integer: author_id (user)
            text   : body
            integer: pin_id
```
  * belongs to user
  * belongs to pin

### Tags/Category
```
            DB:
            string: name
```
  * belongs to board
  * belongs to pin

  * Tags can be searched by.
  * Tags can be followed
