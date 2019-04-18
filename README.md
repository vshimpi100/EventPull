# EventPull

Overview
EventPull is an API-first SaaS product that will bridge the gap between event organizers and event promoters through seamless automation.
At its core, EventPull is a serverless API integration allowing a multitude of applications and client platforms to both push and pull data from a centralized database of events. Clients are divided into Event Organizers and Event Promoters.
Event organizers (music venues, restaurants, sports, etc.) will integrate their sites with EventPull’s API service through WordPress, EventPull.com, or their own backend. These platforms will pull event data from organizer website calendars into the EventPull database.
Once inside the database, events will be sanitized, formatted, and labeled as necessary to ensure uniformity.
Event promoters can then integrate their sites with EventPull’s API through WordPress, EventPull.com, or their own backend. These platforms will allow promoters to pull events from the EventPull database and auto-populate their website’s events page.

Goals
Develop EventPull API
Design per OpenAPI specification
Implement with AWS Lambda & API Gateway
Configure payment tiered permissions and user authentication
Structure API Database
MongoDB Atlas Cluster
API Documentation
Use OpenAPI and Postman for auto-documentation
Prepare base documentation for clients
Develop WordPress Plugin
Integrate with WordPress API for minimal user setup
Integrate (if available) with Tribe Events Calendar & similar
Develop EventPull Scraper
AWS EC2 application that will scrape client sites for event data
Pushes event data to API
Develop EventPull.com
API key sales portal with tiered key permissions
E-Commerce integration with Stripe or similar
Browser Wizard for user setup (see specifications)
Support chat/forum integration
Basic CMS integration

Specifications
Specifications at this stage of development are mainly descriptive in terms of purpose and technology/implementation. It is expected that specifications will be defined further as the development process continues.
EventPull API
As the core technology of the SaaS product, the EventPull API is the most critical aspect of this project. Therefore adherence to good design principles and tight specifications will assist in later stages of the project as goals turn from development to client-side integration.
In an effort to keep design principles at the forefront, EventPull API will be developed with the OpenAPI (formerly Swagger) specification. The OpenAPI specification and Swagger platform will allow for quick, standardized API development and will ease the documentation process. Swagger has provided tools such as the Swagger Editor, UI, and Codegen which allow for quicker development.
An example we will be following for the OpenAPI specification will be Zalando - please see this for guidelines.
This API will be implemented through the serverless AWS Lambda, and linked through API Gateway. The Lambda distribution allows for ease of setup in the short term and ease of scaling in the long term, with improved security over traditional API servers.
Throughout the process of design and implementation, testing can be performed on the API through traditional methods and automated with Postman. Testing and monitoring will ensure the API is performing as expected.

Resources:
OpenAPI Specification
Zalando Guidelines
AWS Lambda with API Gateway
AWS Lambiu da
API Gateway
Postman
API Database
The API / AWS Lambda data will be structured in a MongoDB database, managed using MongoDB Atlas. The data architecture is yet to be determined, but is not anticipated to be critical for the immediate time-frame. A basic architecture will suffice until demand becomes greater.
Resources:
MongoDB on AWS
MongoDB Atlas
Node, Lambda, MongoDB
API Documentation
API Documentation will be a painstaking process, but will be simplified with the use of the OpenAPI specification. There are tools, such as Postman, which can import an OpenAPI specification and auto-generate basic documentation. The more complex the API structure becomes (authentication, multiple users, etc) the more difficult this will become. For the time being, the API will avoid such complexities where possible.
This documentation does not have to be “perfect” at this stage. However, it should be sufficient for a developer working on a client’s backend to link to API based on the documentation. This will be a client-side solution intended for companies with more experienced developers on their teams, so ideal documentation is not critical at this phase. However, documentation is a critical aspect of API development and this talk should not be taken lightly.
Resources:
Swagger OpenAPI Documentation
Import OpenAPI to Postman
Postman Documentation
EventPull.com
The face of the EventPull API will be EventPull.com. The site front-end will be based on the INSIPINIA framework, implemented in React (a react seed project for INSIPINIA is available). This site will include a minimum of the following:
(Initial) Landing Page with short explanation and email signups
(On Launch) Landing Page with user login/signup, descriptions of services, and pricing tiers
New user registration page for creation of a user API Key 
New user setup page for WP plugin download, API documentation link, and (for basic users) an integrated wizard for non-WP, non-developer clients
The wizard will be available for event organizers who are not familiar with development. The wizard will act as an in-page browser. The wizard will instruct users to navigate to their site through the browser, and then will lead them through the process of clicking different event attributes where they appear on the site, and will determine based on classes, IDs, and HTML content how to find these in the future. Last, it will test itself on the user page and the user can correct any errors. These classes and IDs will feed into the EventPull Scraper.
A page to view all events currently in the API, with filters
This page will include a CSV export tool for non-WP, non-developer event promoter clients
User payment portal with subscription options to upgrade from free to paid tier
Documentation page
Blog page
User support forum page where paid tier customers can request support help
User backend with the ability to view account settings, statistics (clicks, websites pulling their data, overall event data, categories for import, etc.
Resources:
INSIPINIA
WordPress Plugin
Focusing now on the client side, a highly valuable asset will be a WordPress plugin that will link client’s WordPress backend to both pull data into our database (in the case of event organizers) and push data into their site (in the case of event promoters). The plugin can leverage WP-API’s open source framework.
For event organizers, the plugin will link to posts on the user’s WordPress backend with labels denoting that these are events (such as those made with The Events Calendar Plugin) and pull their information into the database. For event promoters, the plugin will take events in the EventPull database that fit the client’s location, organizer, category (etc) preferences and create event posts that incorporate this data.
As development continues, integration with popular event plugins such as The Events Calendar will be beneficial. The plugin should be capable of recognizing posts created by these plugins.
Resources:
WordPress Plugins with API Integration
WordPress Plugins with WebApps
WP API and Plugin Integration
EventPull Scraper
For event organizers that are not familiar with API integration and do not user WordPress, the scraper will provide a much needed service. The scraper will take HTML attribute information provided by the client (through the integrated EventPull.com wizard) and periodically scrape the user’s site.
This scraper will operate through an AWS EC2 server. Any web scraping framework is permissible - Selenium and Scrapy are popular libraries that will work for this server. Scraped events will be linked to their user account and pushed from the EC2 server to the API.
Resources:
EventPull v0.1

Milestones
Temporary EventPull.com Landing Page - $100
Deliverables: 
EventPull.com is linked to an Amazon S3 bucket with a static site that shows a landing page
The landing page uses INSIPINIA landing.html
The landing page can collect emails & user info through a wizard
These emails will be linked to Mailchimp
Timeline: 
Functional landing page (lorem ipsum) - 15 Jan 2019
Finalized landing page - 30 Jan 2019
API Design - $200
Deliverables: 
Preliminary API design with:
User accounts
Authentication
Permission tiers
User types (organizer vs promoter)
Event information
The API has URLs set through OpenAPI Specification
The API is meets Zalando guidelines (or similar)
Timeline: 
Preliminary API Design - 30 Jan 2019
AWS Implementation Design - $100
Deliverables: 
Determine efficacy, performance, and cost of:
API Database - MongoDB Atlas
API Server - AWS Lambda & API Gateway
Scraper Server - AWS EC2 with Selenium/Scrapy
API Testing - Postman
Timeline: 
AWS Implementation Design - 15 Feb 2019
API Implementation - $200
Deliverables: 
MongoDB Atlas set up for API database
AWS Lambda set up to run functions on API data
Authentication
Sanitize data
Format data
Sort data
AWS Gateway set up to serve API information
API testing and monitoring has been configured
At this point, testing configs should be able to push data to and pull data from the database
Timeline: 
Preliminary API Design - 28 Feb 2019
API Documentation - $250
Deliverables: 
Preliminary documentation created from OpenAPI specification
Documentation should be descriptive enough for a client to add API integration to their backend
Timeline: 
API Documentation - 30 Mar 2019
Final Documentation - 30 May 2019
WordPress Plugin - $300
Deliverables: 
WordPress plugin created that can pull data from event posts or push data to event posts depending on user type
Plugin authentication through user login & API Key
Will determine API permissions based on user payment tier
Interfaces with WP-API for minimal user action required
Will recognize pre-existing event posts such as those from The Events Calendar
Allows users to set preferences for categories, organizers, locations, etc.
Timeline: 
Basic Plugin with WP-API  - 30 Mar 2019
Plugin recognizes other calendar plugins - 15 Apr 2019
Plugin UI and User Settings - 30 Apr 2019 
EventPull Scraper - $300
Deliverables: 
AWS EC2 Server with Scrapy / Selenium program running
EC2 server will run periodically for each user based on payment tier and user settings
Scraping application will recognize client event information based on stored HTML attribute information
Application will auto-format information
Server will link to API & Database to store event information
BONUS - $200
Machine learning component will learn based on DOM & website image to auto-recognize event information on a webpage
Eventually this will go into the setup wizard. As a client navigates to their site, it will attempt to recommend HTML tags and will output data based on these. As the user corrects 
Timeline: 
Application on server will scrape data based on HTML info  - 15 Apr 2019
Application will format data - 15 May 2019
Application will push data to API - 30 May 2019
Application can be trained to auto-recommend user tags - 30 Jun 2019 
EventPull.com - $500
Deliverables: 
Pages created as described in specifications
User login
User registration & payment page
Event table with filters & CSV download
User backend with statistics & account settings
Blog page
Support forum page
Documentation page
Website based on INSIPINIA with Reactjs seed project
Wizard allows users to visit their site through embedded browser and will lead them through process of tracking IDs
Auto recommends tags if machine learning component implemented
Timeline: 
Website created with pages & base functionality - 30 Feb 2019
Event table added & auto updating  - 15 Mar 2019
User backend created & auto updating - 30 Apr 2019
Wizard - 15 May 2019
Wizard recommends - 30 Jun 2019
Alpha Launch Bug Fixes - $300
Deliverables: 
Fix bugs as they appear during Alpha launch. Alpha will be a limited release using test websites and close partners
Timeline: 
Alpha period - 30 Apr 2019 - 30 May 2019
Beta Launch Bug-Fixes - $500
Deliverables: 
Fix bugs as they appear during Beta launch. Beta launch will open full use to the email list
Timeline: 
Beta period - 30 May 2019 - 30 Jun 2019
Launch Bug-Fixes and Scaling - $500
Deliverables: 
Fix bugs as they appear during launch. Launch will open full commercial use
Timeline: 
Launch - 30 Jun 2019
TIMELINE BONUS - $500
Project completed in a timely manner such that full launch can occur before Summer 2019. Tasks completed quickly such that launch can occur prior to 01 Jun 2019
Payment Breakdown

Phase
Name
Payment
I
Temporary EventPull.com Landing Page
$100
II
API Design
$200
III
AWS Design
$100
IV
API Implementation
$200
V
API Documentation
$250
VI
WordPress Plugin
$300
VII
EventPull Scraper
$300 + $200 Bonus
VIII
EventPull.com
$500
IX
Alpha Fixes
$300
X
Beta Launch Fixes
$500
XI
Launch Bugs and Scaling
$500 + $500 Bonus
Total
$3950 + future work

