<a href="https://shyan1943.github.io/pro2/"><img src="pic/logo.png"></a>

## Online Shipping Booking Platform

### Interactive Frontend Development Milestone Project 

### Context 

This project involves writing custom HTML5, CSS3, API and Javascript/Jquery code to create an online booking platform of at least 3 pages to include:

    * Provide basic company information
    * Provide contact information
    * Customer onclick to find the vessel schedule which fits their supply chain.
    * Customer onclick to book or connect the company 

External user’s goal (The Shipper): The external users are shippers searching for a suitable vessel schedule, which fits their supply chain.

Site owner's goal (The Company): The Site owner's goal is to raise the company revenue and branding by keep up with changing technology trends. 

### Demo

A live website can be found here https://shyan1943.github.io/pro2/

<a href="https://shyan1943.github.io/pro2/"><img src="pic/demoLanding.jpg"></a>





------

## UX

### 1) STRATERY 
#### 1a) Defining the Project
The purpose of creating this website is to aid Site Owner to reduce their data workload and keep up with changing technology trends to meet their customers’ demands. It will even be better if the External User tumbles upon the website find the suitable vessel schedule and close the deal through the website to achieving both Site Owners' and External Users' business goals. 

#### 1b) Target audience : 

    * Business to business
    * Shipper & Freight Forwarder

#### 1c) Identifying External Users: 
The primary purpose of this platform is to simplify both Site owner and External Users’ daily work process to push the boundaries to connect and booking. Therefore, the website should be interactive to the person who has the authority to making the booking with Site Owner. The person may be the business owners, shipping/logistics/customer service department head or assistant in shipping, freight forwarding, trading industry or manufacturer (hereafter known as "Shippers"). 

#####     Identifying External Users' Objective: 
The shippers’ goal is to deliver the goods as per their clients’ ideal schedule. 
As such, they will have to call their vendors one by one, to look for a suitable sailing schedule and space availability, which may last from hours to days, to be booked. They will only have a short span of time due to the overwhelming thousands of order from time to time. If the schedule is deemed suitable for their clients, they can book the schedule over the platform. 

      EU1. Speed and accuracy
      EU2. Get as much sailing schedule choices as possible 
      EU3. to decide whether the sailing schedule is suitable
      EU4. to understand the Site Owner company profile 
      EU5. to do the booking request straight away
      EU6. to print/download the schedule in soft copy
      EU7. to find out how to contact the Site Owner 


#### 1d) Identifying Site Owners' Objective: 

The Site owner's goal is to raise the company revenue and branding. Therefore, the following objective are set to achieving the goal :

      SO1. To simplify daily data entry and consolidation jobs 
      SO2. Enhance company branding 
      SO3. To simplify External Users’ supply chain 
      SO4. Keep up with changing technology trends 
      SO5. Pushing the boundaries to connect 
      SO6. Stay ahead of the competition 


#### Therefore, the platform should focus on:
      ES1. Upload Excel data (SO1) 
      ES2. Provide Site Owners’ profile to improve the company brand (EU4) (SO2) 
      ES3. Be easily accessible regardless of the device visitor is using (EU1) (SO3)
      ES4. Good Navigation (EU1) (SO3) 
      ES5. Provide an online version of the sailing schedule (EU2) (SO4)  
      ES6. Allow shippers to send booking request straight away (EU5) (SO3) 
      ES7. Allow shippers to contact Site Owner (EU7) (SO5) 
      ES8. Allow shippers to print/download schedule in PDF or Excel template (EU6) (SO3)
      ES9. Allow the shipper to search for the suitable sailing schedule (EU1) (SO6) 


### 2) SCOPE

#### 2a) User stories 
      US1. As a Site Owner, I want to upload my several excel files and it auto return in the sailing schedule platform, so that it can simplify our daily data entry and consolidation jobs. (ES1) 
      US2. As a Site Owner, I want to simplify and assist in shippers’ supply chain, so that we can grow together. (ES3~9) 
      US3. As a shipper, I want to get the sailing schedule information easily within few click, so that I can finish my task as much as possible. (ES4) 
      US4. As a shipper, I want to have more choices on sailing schedule, so that I can get a closest sailing schedule to match my client’s ideal date. (ES5)
      US5. As a shipper, I want to know about the company profile, so that I know Site Owner’s strength area, capabilities & reliable. (ES2) 
      US6. As a shipper, I want to send my booking request straight away through the platform, so that I no need to call anyone to get my booking done. (ES6) 
      US7. As a shipper, I want to print or download the sailing schedule, so that I can plan for my shipment and operation schedule especially bulk orders from client. (ES8) 
      US8. As a shipper, I want to have Site Owner contact details, so that I can get in touch with the them. (ES7) 

#### 2b) Functional Requirement
      FR1. Backend upload Excel sailing schedule, auto convert and store in API (ES1)
      FR2. Site Owner’s company logo & profile (ES2)
      FR3. Responsive design (ES3)
      FR4. Good Navigation that all resources are easy to find, allowing shippers to navigate the layout of the site intuitively. (ES4)
      FR5. Get API Sailing schedule (ES5)
      FR6. Online Booking Request (ES6)
      FR7. Contact details (ES7)
      FR8. Allow download of sailing schedule (ES8)
      FR9. Searchable sailing schedule (ES9)

#### 2c) Content Requirement
      CR1. Backend Excel sailing schedule data (ES1) 
      CR2. Site Owner’s company profile section (ES2)  
      CR3. Navigation back to home, to get schedule, to profile page and to contact details (ES4) 
      CR4. Sailing schedule section (ES5) 
      CR5. Online Booking Request section (ES6)  
      CR6. Contact section (ES7)
      CR7. Downloadable sailing schedule (ES8) 


### 3) STRUCTURE

#### 3a) Information Architecture
      
##### Content Inventory (CI)
Information required on the website to fulfil the content requirements.

      CI1. Objective (CR2)  
      CI2. company profile (CR2)  
      CI3. Sailing schedule (CR4) 
      CI4. Online Booking Request (CR5)  
      CI5. Contact details (CR6)

##### Image required
      CI6. High resolution photo to be displayed as 100% width image (ES2)
      CI7. Logo (ES2)
      CI8. Profile image (ES2) 

##### Documents
      CI9. Downloadable sailing schedule (CR7)
  
##### Content Structure (CS)
The content will be regroup into a sequential structure. IA Sitemap.png
<img src="pic/IASitemap.png">


##### Home Page :
      CI6. It starts with a home page with a 100% width image allow visitor perceive briefly of what is the Site Owner business & understand Site Owner a little better.
      CI7. Company Logo display to enhance the company branding 
      CI5. Contact details to be fixed at the bottom for the convenience of External User 
      CI3. “Get Schedule” Button to generate (CI3) sailing schedule page. 


##### Sailing Schedule Page :  
      CI3. This page return a table, which contents the information External User’ needs. (ETA POL, POL, POD, ETA POD, Vessel, Vovage & transit time). 
            *Definition* 
            ETA = Estimated time of arrival
            POL = Port of Loading 
            POD = Port of Discharge
      CI4. A “Book” button to link External User to (CI4) online booking request 
      CI9. Downloadable sailing schedule is available in this page as well 

 
##### Profile Page:
      CI1. This page is to present the Site Owner Objective 
      CI2. As well as company profile (e.g. who they are, what services they providing, where is their strength area & etc..) 
      CI8. The layout should include a profile image, which is eye catching, suit the theme color and convey the business’ objective 








------
## Features
