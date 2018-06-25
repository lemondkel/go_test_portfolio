package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	r.GET("/ping", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"title": "Main website",
		})
	})

	http.Handle("/", r)

	http.ListenAndServe(":8080", nil)
}