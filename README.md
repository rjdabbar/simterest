Models
  Users
  Boards
  Pins
  Tags
  Comments

Simterest -- simulate your interests!

Root:

  displays all follows pins

Users:
```
              DB:
              string: username
              string: password_digest
              string: session_token
```

  has many boards
  has many pins through boards
  has many followers
  has many followed_topics (tags)
  has many followed_boards (boards)
  has many followed_pinners (users)


  Users can sign up
  Users can sign in (create session)
  Users can sign out (destroy session)
  Users can CRUD boards
  Users can CRUD pins
  Users can be followed
  Users can follow boards
  Users can follow categories


Boards:
```
            DB:
            string : title
            text   : description
            string : category
            integer: creator_id (user)
            integer: collaborator_id (user)
            boolean: secret
```
  is taggable
  belongs to user
  has many pins
  has many tags

  Boards can be pinned to
  Boards can be secret (private/invitation to view)
  Boards can be followed


Pin
```
            DB:
            string : title
            text   : description
            integer: board_id
            string : image_url
            string : source_url
            string : image_alt
            integer: via_user_id
```
  belongs to user
  belongs to board
  has many comments

  Pins are pinned to boards
  Pins have an image

  Comment
```
            DB:
            integer: author_id (user)
            text   : body
            integer: pin_id
```
  belongs to user
  belongs to pin

  Tags/Category
```
            DB:
            string: name
```
  belongs to board

  Tags can be searched by.
  Tags can be followed
