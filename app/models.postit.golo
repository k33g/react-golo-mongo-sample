module models.postit

import m33ki.mongodb2

# Model
function PostIt = -> MongoModel(
  Mongo()
   : database("postitsdb")
   : collection("PostIts")
)

# Collection
function PostIts = -> MongoCollection(PostIt())


