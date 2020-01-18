# Auto Service Tracker Client
Typescript, Angular, Bootstrap, HTML, and CSS.

# Overview:
A front end application that consumes my [Auto Service Tracker api](https://github.com/achang209/auto-service-tracker-api/edit/master/README.md). 
This application pairing allows users to keep track of their car's maintenance history. This project was inspired after numerous
visits to disparate car shops and not being able to recall when or who last serviced a particalar part of my car.

# Current Features:
Users can save and edit their invoice details, search their invoices by various properties (i.e. service provider or service performed),
and upload/download a PDF of their original invoice.

# Next Steps:
Currently my `Invoice` model object has a flat architecture structure where the value of each property is of type `int`
or `String`. Moving forward, I would like to implement a nested object architecture to allow certain `Invoice` properties 
(i.e. service provider and service performed) to be their own entity classes to illustrate relationships between the data types.
Although I understand how to establish these relationships in my back end, I am struggling to deserialize the JSON object to Java objects
when attempting to implement a nested entity architecture.

