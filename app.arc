# Arc Documentation: [https://arc.codes/docs/en/get-started/project-manifest]

@app
hello

@static
fingerprint true

@ws
action
connect
default
disconnect

@http
get /
get /likes
post /likes

@events
hit-counter

@scheduled
daily-affirmation rate(1 day)

@tables
likes
  likeID *String

@tables-streams
likes

@tables-indexes
likes
  date *String