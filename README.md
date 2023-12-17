
# TEDxMITE Ticket Portal

A web application built to use as a ticket portal for TEDxMITE 2023. It is built using NodeJS, ExpressJS and Handlebars.
The project is linked to a google sheet which is used as  a database.

The application works with the physical copies of the ticktes where each ticket has a unique qr code. Each qr code leads to the attendee details of that perticular ticket number

## How this application works

[1] Everytime a attendee enters/buys a tickets to TEDxMITE 2023 using this [form](https://docs.google.com/forms/d/e/1FAIpQLSeFrl6ZajiIh2safxh_5GZ3JiedvinZhWSFp931ifZ1xlHRhw/viewform) an entry is made to a google [sheet](https://docs.google.com/spreadsheets/d/1ejxDDZ2hHsj71ymw4PS7OYyDOhIKvPJcujQfBwYxiPw/edit?resourcekey#gid=847643383)

[2] Tickets are printed where each ticket contains a unique qr code. 

[3] The application is linked to the sheet using google cloud api.

[4] Manually entering the ticket numbers in the sheet links the qr code on the ticket with a perticular attendee entry

[5] For every ticket the application takes account of the type of ticket (Standard Pass/Premium Pass). Also checks if the attendee is a MITEian or not

## Screenshots

List of all the tickets that have been assigned

![home page](./screenshots/home.png)

Example for someone who has bought a Premium Pass

![ticket page](./screenshots/ticket-premium.png)

Example for someone who has bought a Strandard Pass

![ticket page](./screenshots/ticket-standard.png)

Screenshot of the google sheet

![ticket page](./screenshots/sheet.png)

## Scan the QR code to test the application
Pictures of printed tickets each with a unique qr code. 

![Premium Pass](./screenshots/Ticket_No.001.jpg)

![Premium Pass](./screenshots/Ticket_No.002.jpg)

![Strandard Pass](./screenshots/Ticket_No.080.jpg)

![Strandard Pass](./screenshots/Ticket_No.081.jpg)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

