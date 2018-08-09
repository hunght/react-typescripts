## POC raven

### Install
run `npm install` to install the project. 
copy over `.env.example` to `.env`

### API

__`/main-topic/` (POST)__

_payload:_
- `name` (name of the main topic)
- `subject` (subject of the main topic)

__`/main-topic/` (GET)__

_response (array of objects)_
- `_id`
- `name`
- `subject`
- `comments` (array of comments)
- `responses` (array of responses)
