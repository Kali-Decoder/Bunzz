package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Payload struct {
	Number int `json:"num"`
}

func main() {
	fmt.Println("Creating Server for Bunzz Post Data")
	http.HandleFunc("/postValue", handlePostValue)

	// Creating Server in GO-Lang on port 8080
	fmt.Println("Starting server in port 8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func handlePostValue(w http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload := Payload{}
	err = json.NewDecoder(bytes.NewReader(body)).Decode(&payload)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Println("Body", payload)
}
