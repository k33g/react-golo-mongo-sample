module routes.postit

import m33ki.spark
import models.postit
import controllers.postits
import m33ki.jackson

function definePostItsRoutes = {

  # Collection Helper
  let postits = PostIts()


  GET("/coucou", |request, response| -> Json(): message("coucou"))

  # Create PostIt
  POST("/postits", |request, response| {
    return PostItsController(postits): create(request, response)
  })

  # Retrieve all PostIts
  GET("/postits", |request, response| {
    return PostItsController(postits): getAll(request, response)
  })

  # Retrieve PostIt by id
  GET("/postits/:id", |request, response| {
    #return PostItsController(postits): getOne(request, response)
    return PostItsController(postits): getOne(request, response)
  })

  # Update PostIt
  PUT("/postits/:id", |request, response| {
    return PostItsController(postits): update(request, response)
  })

  # delete PostIt
  DELETE("/postits/:id", |request, response| {
    return PostItsController(postits): delete(request, response)
  })

}
