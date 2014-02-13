module controllers.postits

import m33ki.spark
import m33ki.jackson
import models.postit


function PostItsController = |postits| { #arg is a collection

  return DynamicObject()
    : define("getAll", |this, request, response| {
      # GET request : get all models
        response: type("application/json")
        response: status(200)
        return Json(): toJsonString(postits: fetchAllReadable())
    })
    : define("getOne", |this, request, response| {
      # GET request : get one model by id
        response: type("application/json")
        let id = request: params(":id")
        let postit = postits: model(): fetch(id)

        if postit isnt null{
          response: status(200)
          return postit: toJsonString()
        } else {
          response: status(404) # 404 Not found
          return Json(): toJsonString(map[["message", "PostIt not found"]])
        }
    })
    : define("create", |this, request, response| {
      # POST request : create a model
        response: type("application/json")
        let postit = postits: model(): fromJsonString(request: body())
        postit: insert() # insert in collection
        response: status(201) # 201: created
        return postit: toJsonString()
    })
    : define("update", |this, request, response| {
      # PUT request : update a model
        response: type("application/json")
        let postit = postits: model(): fromJsonString(request: body())
        postit: update() # update in collection
        response: status(200) # 200: Ok + return data
        return postit: toJsonString()
    })
    : define("delete", |this, request, response| {
      # DELETE request : delete a model
        response: type("application/json")
        let id = request: params(":id")
        let postit = postits: model(): remove(id)
        response: status(200) # 200: Ok + return data
        return postit: toJsonString()
    })

    #W.I.P.
}

