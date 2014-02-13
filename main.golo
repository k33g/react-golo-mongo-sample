module main

import m33ki.spark
# requisite for "hot reloading"
import m33ki.hot

import routes.postit 

function main = |args| {

  initialize(): static("/public"): port(8888): error(true)
  # listen to root of the webapp
  listenForChange("")
  definePostItsRoutes()

}
