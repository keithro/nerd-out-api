# BACKEND 2-DAY HACKATHON	

![NerdOut](nerdout.png)

Using the data from the JSON file, build a funtional **FULL CRUD** **API**.
## Your Task

As a developer you are assigned to build an api that takes in the data from the `attendees.json` for the latest "Nerd Out" gathering happening in April. 

Create an **API** that takes in the data from the `attendees.json` file. You can use Mongoose/Express, Flask,  Django RESTful Framework or any technology that you are comfortable with. 

At the moment there are **1,000** attendees. You must have endpoints that...

- Shows all 1,000 attendees
- Shows all listed based upon what team number that is inputed

**GET**

```
 /api/team/1
```
    or
 ```
 /api/team?q=1
 ```

​	should return a list of attendees that is on team 1




- Shows all based upon one of the following companies: `Apple`, `Microsoft`, `Google`, `Yahoo`, `Adobe`, `Amazon`, `Meta`, `Sony`, `Oracle`

**GET**

```
 /api/company/Apple
```
or 

```
 /api/company?=Apple
```
​	should return a list of Apple attendees



- Show attendees based upon the title: `President`

**GET**

```
 /api/title/President
```
 or

 ```
 /api/title?q=President
 ```

​	should return a list of attendee(s) who's title is `President`




- Find attendee id #**793** and change their company from `Google` to `NASA`
- Find attendee id #**98** Mojo Jojo and delete them from the **API**
- Create a new attendee



###  Bonus:

 - Deploy your API
 - Add a README that goes through what your API does
 - Convert the phone field format from `xxx-xxxxxxx` to `(xxx) xxx-xxxx`.
 - Take the date format from month/year and separate it to have it's own fields (month and year)
 - Be able to search by any part of the name and return the results 

------



## JSON DETAILS

- **id** - `integer`
- **name** - `String`
- **phone** - `String`
- **address** - `String`
- **city** - `String`
- **state** - `String`
- **country** - `String`
- **postalZip** - `String`
- **email** - `String`
- **Company** - `String` 
  Listed Companies:  `Apple`, `Microsoft`, `Google`, `Yahoo`, `Adobe`, `Amazon`, `Meta`, `Sony`, `Oracle`
- **companyFunded** - `String`
- **userID** - `String`
- **team** - `Integer` From 0  to 20
- **paid** - `Boolean`
- **date** - `String`
- **title** - `String` 
  Listed Titles:  `CustomerSuccess`, `FrontEnd`, `DevOps`, `QA`, `BackEnd`, `FullStack`, `TechLead`, `DataScience`, `ProjectManagement`, `UI`



## Attendee sample

```
{
		"id": 1,
		"name": "Bob Ross",
		"phone": "453-848156",
		"address": "4010 Electric Av.",
		"city": "Las Vegas",
		"state": "Nevada",
		"country": "United States",
		"postalZip": "34556",
		"email": "HappyTrees@happyclouds.edu",
		"Company": "Apple",
		"companyFunded": 82.16,
		"userID": "DO19252537151321083934722339",
		"team": 6,
		"paid": true,
		"date": "02/23",
		"title": "CustomerSuccess"
}
```



### How to approach coding when your mind goes completely blank:

1. Don't panic; going blank happens to everybody from time to time. 

2. If you do panic, start reminding yourself you can get through this

3. Take a moment away from the task to stable your mind.

4. Drawing things out and Pseudocode everything

5. Break down the code into smaller pieces

   

There is an more extensive view about debugging and working on code located here:
 https://www.lifedebugger.dev/docs/debug

