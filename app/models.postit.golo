module models.postit

import m33ki.collections
import m33ki.models
import m33ki.mongodb

# Model
function PostIt = -> DynamicObject()
  : mixin(Model())
  : mixin(
      MongoModel(
        Mongo()
          : database("postitsdb")
          : collection("PostIts")
      )
  )

# Collection
function PostIts = -> DynamicObject()
  : mixin(Collection())
  : mixin(
      MongoCollection(PostIt())
  )

