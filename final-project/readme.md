

# **FP4 \- Final Project Writeup**


## Part 1: Website Description


* What is the purpose of your website?   
My project is about my personal portfolio and making it more about who I am as a person. The purpose of this website is to showcase my work and me as a person. 

* Who is the target audience?  
Target audience will be those who are interested to know more about me in a digtial manner, recruiters and potential employers
* What information do you convey with your website?   
I convey about my experience in UX and two projects that demonstrate the knowledge that I have gained through my work
* How is it interesting and engaging? 
It is interesting as I have animated lines with typing effect, I use cakes to symbolize my work experience and users can interact with this. I used a library for a map feature in my homepage. Project page is like a recipe catalog where there is a way to get to each of the projects. They are like yellow folders and a pop up box will appear which is a short overview of the project.
In each project specific pages, there are multiple animations for like my role and my deliverables

## Part 2: User Interaction

Homepage
1. Interaction type. Scroll to the middle of the page with the cake. Click on UX Research, Product Design or Graphic Design. It will show the respective sections below the cake
2. Click on the here word to go to the projects page
2. Scroll to the map and hover over the pins on the map. This will show where I have lived in the past
3. Nav Bar: click on either of the navbar items and it will lead to the respective pages

Projects Page
1. Hover over each of the folders and a pop will appear. Click on the learn more button. 

Project 1 and Project 2 page: Scroll through the pages and you will see animations for my role, deliverables secondary research. 
Responsiveness:This prototype works well with a laptop screen and iphone SE 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Leaflet API
   * Why did you choose to use it over other alternatives? (2 sentences max)  
   It was an easy to use library and most search engines recommended this. 
   * How you used it? (2 sentences max)  
   I used it to show where I have lived over the years to show how it makes me adaptable as a person. There is a map with all the hover pins of places that I have been, I implemented this through javascript 
   * What does it add to your website? (2 sentences max)  
   Adds interaction and engaging content to my website
2. Anime JS library 
  * This was an easy to use and intuitive library, it had the animations that I needed
  * I used this by adding animations to my project page (slide in effects and such). it is called the easing animation and more specifically used the easeOutQuad
  * This adds animation effects to my page and makes it more engaging
  
3. Bootstrap Library
* For responsiveness, I used bootstrap. I chose this because I have previous experience using this and it seemed to be pretty straightforward
* I used it for all my pages to get responsiveness, followed the grid method and adding how much should each section take up with regards to space 
 * This makes it easier to view this website across multiple sized devices



## Part 4: Design Iteration
Homepage
I made the sentences to animate rather than singular words. I chose to show the cake metaphor and from class critique, I added interactions so it would provide a much cleaner look.
I used a library fr the map as I was not able to use the map that I had drawn. Using this library was so much easier and it looked better once it was implemented onto the homepage
Project Page
I made it all a singular folder project so that it would be more realistic for me to implement this project. This way it was just two projects
Project 1 and 2
I added animations to the project 1 and 2 page as my prototypes did not have any and I wanted to make my pages more engaging and interactive

## Part 5: Implementation Challenge

Sometimes, I felt like what I prototyped is hard to code, then I made another version where I could code it properly. 
In the Homepage, I was going to intially have only a certain words be typed out but I chose to animate the whole sentence instead
In the project page, I was intially going to add mutiple folders showing all the projects and they would be on top of each other but I chose to not go down this path as there were too many projects if I had to choose that instead I went with two projects and they were displayed one after the other.
I changed the images for the cake and made it more interactive in my code so that the users can interact with it.
For the each specific project page, I chose to add animations in the pages, I didnt have this before in my prototype. I thought this would be a good way to add more interactions in my portfolio.


## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).
I used ChatGPT and perplexity for my project. I used this in this for learning purposes. More about trying to understand what each thing in my code does. I haven't learned about libraries before so this was a great resource. I learned about how these can be implemented and how they function within pages. I also learned about Bootstrap through chatGPT, it helped me understand how it works and the specifics for mobile responsiveness as well. I learned about different errors in my code and what those errors meant through these platforms
I fact checked certain things what chatGPT gave me in this platform. I was able to learn more in this platform too. Both of these platformsgave me suggestions for the libraries and API I could use that is fit to my project needs. It was also able tell me how exactly they work hand in hand. It gave me examples about the use cases as well, but they were not specific to my case. This was a good tool to brainstorm ideas, there were a few times where I felt stuck in my creative side and I asked for ideas and it sort of gave me guidance on what I could try 
it gave me guidance on how to structure code and where its ideal to write comments this helped me to keep my document more maintainable and it helped me understand what some lines of code meant 


### Usage Experiences by Project Aspects

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | Yes| No | No | Yes | None |
| ChatGPT| Productivity | 4 | 1| 1 |6 | n/a |
| Perplexity| Usage | Yes | No | No | Yes | none|
| Tool2 | Productivity | 5 | 1 | 1 | 6| n/a |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) 
  1. Tool1: ChatGPT helped me understand how libraries worked
  2. Tool2: Perplexity also helped me understand how libraries worked and how animations worked
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) 
  1. Tool1: ChatGPT gave me more information than I needed. It would give me code when I ask for a conceptual question
  2. Tool2: ChatGPT also gave me recommendations for my style in the portfolio and I rejected it 
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1:  ChatGPT recommended styles for the css part and I didn't follow it because I wanted to follow my stucture with colors. It suggested ways I could make my website responsive but I was focused on using bootstrap so I referred to the Bootstrap website most times 
  2. Tool 2: Perplexity: this helped me understand how things worked and gave me explainations to things I did not understand 

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: ChatGPT gave me ideas to brainstorm with when it came to creativity of my portfolio and also gave me advice on how to debug my code. I would tell GPT the error and it would give me more information about the error and what that meant.
  2. Tool2: I accepted ideas that it gave me on how to use libraaries for my website but I implemented it in my way. It helped me understand what certain errors meant in my code 
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: Somestimes I thought that ChatGPT was not accurate all the time and I had to double check things. 
  2. Tool2: 


> Pros and cons of using GenAI tools
* Pros
  1. Tool1: Chat GPT. It will help me understand a complex concept in very simple terms. Sometimes I find it hard to understand what I read on the internet and chatGPT breaks it down to simpler terms for me 
  2. Tool2: Perplexity: This gives me more precise information along with links to the source so that I go look into information provided for further reading 
* Cons
  1. Tool1: ChatGPT gives the code away too quickly even when I'm not asking for it. I might be asking conceptual things and somehow I get code as my response. I have come to a conclusion on not to fully rely on chatGPT for the code as I will not learn anything if I rely on chatGPT
  2. Tool2: I haven't used Perplexity AI much to get any cons out of it. I used it rarely for the project 


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

I do not have my perplexity chat logs and some of my chatGPT logs. But this is what I could find from the saved chats 

1. https://chatgpt.com/share/6750e573-eb0c-8010-b05f-976285395dcd
2. https://chatgpt.com/share/6750e5c7-925c-8010-9d74-7879306fc7e2

Appendix
Homepage WAVE Summary and details
<img width="1461" alt="homepage_summary" src="https://github.com/user-attachments/assets/edc514da-7675-47ef-a875-3a7ad3deeef7">
<img width="1469" alt="homepage_details" src="https://github.com/user-attachments/assets/6624dcbc-dc03-42d2-abf2-583121b86eb1">



Project Page WAVE Summary and Details

<img width="1241" alt="projectspage_details" src="https://github.com/user-attachments/assets/7bd11a87-cd76-4154-b439-5a8fe573fd3c">
<img width="1232" alt="projectspage_summary" src="https://github.com/user-attachments/assets/c5c36044-f9df-40a6-807c-ff3476a5b8f7">


Project 1 WAVE Summary and Details

<img width="1241" alt="project1_details" src="https://github.com/user-attachments/assets/0de05424-06ff-471f-ae6f-c0cff3aed571">
<img width="1254" alt="project1_summary" src="https://github.com/user-attachments/assets/32ea0590-955b-413e-9196-0def92679f44">


Project 2 WAVE Summary and Details

<img width="1469" alt="project2_details" src="https://github.com/user-attachments/assets/244b304d-6237-4360-850a-00c1a5044cd0">
<img width="1470" alt="project2_summary" src="https://github.com/user-attachments/assets/bcfbf43b-8939-4078-a970-38f796439038">


FP3 - Final Project Check-in
Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

I made progress on my project, I finished up coding the HTML pages for my portfolio, I understood how many pages I needed. I realized that I needed to follow the same structure with pages that showcase my work. I made my pages reponsive which got me ahead of schedule

Implementation Plan Updates
Staying on track, I finished the basic structure of most pages and made them responsive. This week I want to focus on getting animations in my portfolio. This is going to be a difficult part in my project as I need to learn libraries and ensure that I have a basic understanding of it before I dive deep into coding it 
Generative AI Use Plan Updates
I have beenusing ChatGpt to understand how responsiveness works and how bootstrap can be helpful in this situation 


# **FP2 \- Evaluation of the Final project**

## Project Description
Motivation for the project is to create a personal portfolio about my work but show it in a creative way. I’m showing my work in the realms of UX Research, product design and graphic design. One of my passions is baking so I want to portray that by making it in the theme of baking and how I have drawn similarities between baking and my experience in UX 

## High-Fi Prototypes

### *Prototype 1*

<img width="365" alt="prototype1" src="https://github.com/user-attachments/assets/fea9ade1-029d-4d77-aa37-04e32ee474c3">

Here in this prototype I have implemented animations and an animated carousel of my projects along with pictures of the same. The world map at the bottom shows the place that I have lived and those pins will reveal locations when you hover over the pins. There is a drawn photo of me that shows in my element which is baking and cooking but also at the same time showing that I do design 
Video link: https://youtu.be/fpbJye_JxLM

Prototype link: https://www.figma.com/proto/j9Kmh8zC0Yr5WAhS68R4VL/fp2?node-id=1-2&node-type=frame&t=RUjsWub0xeH3BrjV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1

### *Prototype 2*
<img width="366" alt="Screenshot 2024-11-04 at 9 30 13 PM" src="https://github.com/user-attachments/assets/6995da82-2547-4ca1-be48-fa9070222e72">


The prototype for this was the work page, this was another screen of the portfolio. This more about how each project page is going to look like, there will be a progress bar at the top so that users can scroll to know how much more left is there within the page 
Video:https://youtu.be/a9c79jxrFHI
prototype:https://www.figma.com/proto/j9Kmh8zC0Yr5WAhS68R4VL/fp2?node-id=19-289&node-type=frame&t=DkIlXL3hJgQtr55H-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1

## Usability Test

evaluate with 3 users
goal: To understand if the flow makes sense and is it possible to understand my design work
* specific task:
- ask them to go on the homepage and navigate to one of my projects from the homepage
questions
- thoughts on the homepage 
- what they thought of the flow of the project 
- the process to get to the project page
* Overall feedback:
- They thought that the flow was fine and functional 
- There was feedback around the colors, they told me that if I wanted to have pastel colors, stick with pastel colors or different shades of the same colors. This is to avoid any inconsistency 
- There was a comment about having a footer that talks about my contact information and also leading back to the project page
- Making the pins either of different size or color so that users can see it clearly and interact wtih it 
- Most people were able to do the task and was able to get to the project without much problems
There was feedback around to make certain parts more apparent if  a user action needs to a interact with the elements on the screen 
How I implemented this feedback:
- The usability testing gave me insight as to how I can improve the portfolio to make it more personable and how the interactions can make a big difference to the audience. I changed my direction of my portfolio to make it more baking based as baking is my passion.
Homepage section
- I added a cake metaphor to my homepage because I wanted it to be related to baking and I showed the layers of the cake as my experience across HCI. 
- Users can access my projects page through the cake section
- I added a footer to all my pages to include contact information and a button to access the projects page

Projects page 
I took the project carousel out from the homepage and added a project page which is similar to a recipe catalog but users can still go to this project catalog from the homepage

Project/case study page
I changed up the overall layout of the project /case study page where I followed the outline of how a recipe looks like. 


## Updated Designs
There the cake metaphor and the footer added. The projects page is added which is like a catalog of projects and the project/case study specific page is now more like a recipe and its organized. The animations and interactions are more apparent. There is one color and shades of that color that I chose for the screens. Only one project/case study is fleshed out for now which is the InnovateMap, for now you can select this and it will go to the InnovateMap page. 

Video: https://youtu.be/_sIb9gMnDNg
Prototype:https://www.figma.com/proto/j9Kmh8zC0Yr5WAhS68R4VL/fp2?node-id=104-143&node-type=frame&t=gBs5awDjbGQXTyIl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=104%3A143
<img width="265" alt="Screenshot 2024-11-04 at 9 31 13 PM" src="https://github.com/user-attachments/assets/ecf54971-d734-4121-8c98-72e7f2b99cbb">
<img width="334" alt="Screenshot 2024-11-04 at 9 31 49 PM" src="https://github.com/user-attachments/assets/b3aaae87-aca9-4179-a929-9f276a51082c">
<img width="357" alt="Screenshot 2024-11-04 at 9 32 32 PM" src="https://github.com/user-attachments/assets/2c05f6ce-a787-4365-a2e4-452a364aa875">


## Feedback Summary

I received a range of feedback during the critique session. These are the main points  :
- To make the portfolio more personalized 
- To add my more colors so that I can show my work in terms of design 
- I also received feedback about the flow and to make it more visible to the audience
- I received feedback about the animations present in my prototype and how that will help my screens 
- World map was a feature that the audience liked and they added suggestions to make it more responsive.
Making the portfolio personal has been the goal for me and I want to make it fun and true to myself. This was the main intention for the second revision after the usability feedback as well. I made the interactions to the world map more intentional and since in the presentation in the class, it was just the picture that was shown. I added colors to my portfolio to show my personality within the portfolio, this was also a feedback that I received from my usability testing as well.
There was also some feedback around colors and I ensure to stick a certain color and shade of the color rather than having many skewed colors that don't go well with each other 
I also made some of the sections more apparent so that the user isn't lost in my portfolio.
I added more animations on my prototypes, I made a typing effect for the introduction of what I strive to do in my designs. 
There was some feedback about whitespace and how sometimes it might be cluttered in the project page because of all the information about the project. I chose to go about a strategic way to organize this which was having clear sections and I thought of my project page like a recipe since I wanted to show that one of my passions is baking. I chose the direction of making my portfolio personalized by making it related to baking.


## Milestones

My milestones are below
Milestone 1: Basic structure of the portfolio
* Set up the basic HTML structure for the portfolio 
* This milestone also includes selecting the how many pages I want to have in my portfolio
* Start adding basic content into the project/case study specific page
* Develop navigation menu
- Milestone 2:  Animations
* Start working on the animations
* Implement responsiveness
* Add my interactive elements to my homepage
* Conduct a basic round of testing
* Make changes based on the feedback 
- Milestone 3:
* Finalize the animations and interactions
* Ensure that the website is accessible
* Finalize the responsiveness and fix bugs from the usability testing 

Week by week plan 
- Week of Nov 4th-nov 10th: work on milestone1, since this is the first step, this shouldn’t take much time to finish up
- Week of Nov 11th-nov 17th: milestone 2. This is going to be the challenging week as `I’m` working with libraries and working on the animations
- Nov17th-nov24th: Work on milestone 3. This is going to be extended and is more about finalizing the portfolio and ensuring that everything works smoothly
- Thanksgiving break
- Dec1-Dec6th: finish up milestone 3


### *Libraries and Other Components*

For animation:
I plan to to use either of the animation js libraries: 	
- anime.js: this is a lightweight animation library that will help me with text animation 
- Popmotion: this helps me to animate text, numbers and colors
- Scrollreveal: to show dynamic interactions with scrolling 
- I want to use Bootstrap for implementing the responsiveness of the screens


## Generative AI Use Plan


I intend to use Perplexity and chatGPT to understand how to use javascript libraries in my project. I want to learn more about libraries through these tools and I believe that this will help me understand the concepts of how they work. I also think that these AI tools will explain tough concepts that I don’t understand. I also think that AI tools can help understand how animation works in code and how I can add my personal art to the code. AI tools will helps understand how to make smooth transitions between sections within my work page.
I believe that AI will help me in the general outline of content for projects like what are the main sections that need to be shown for the users when in comes to UX Research project, Visual design and Product design projects as well. The outline for the content will be the foundation for how each project sections should look like and how I can add more creative elements to show my personality 
I want to learn more about responsiveness and see how I can implement it in my project, I think AI will help me learn the concepts behind responsiveness and how it works.
I will not use for copying code as I will not learn anything in that process, my intention for this project is to learn as much as I can because this might be the only time I’m going to learn javascript in this kind of academic setting 


### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT  
  * I will use it for understanding how libraries work because it can help me deploy libraries in my code efficiently 
  * I will not use it for copying code because it might not be able to help me with gaining experience in coding 

* Perplexity
    * I will use it for understanding concepts that I did not understand properly in ChatGPT

### *Responsible Use*
I dont plan to use for copying code as it will not help me learn. I intend to use this for understanding things that I do not understand. I intend to use it for understanding only


---














Idea 1
Personal Portfolio

The main idea of this portfolio is to showcase my ux projects, graphic design projects to potential recruiters 
I wanted this portfolio to be of three main pages and I’ll also plan to show one of my projects for this final project. The three main pages include: home, about and project page. I want to convey my design personality through this portfolio
I plan to make this more engaging by adding animations and I want to make it more artistic by adding my personal touch. I want to draw some of the icons on my portfolio. I plan to make this more accessible by adding alt text for images, having a clear HTML structure, and color contrast to ensure readability.

![Screenshot 2024-10-28 at 6 23 28 PM](https://github.com/user-attachments/assets/124743e5-46da-4f58-88ac-1bf0a6f33b35)




Idea 2

I found this on youtube 

Most of the time, when we see really good food on youtube, we wonder if it is actually worth the hype. This website will allow users to add/review recipes that they found on Youtube or on Youtube shorts. Give honest feedback about the recipe. They can share a small blurb and add a photo of what they made.
I want to make this interactive by making interactions of how users can add a post/review and then it will be posted and having cool transitions. 
I plan to make it accessible by using color contrast so that there is an understanding between text and images


<img width="244" alt="Screenshot 2024-10-28 at 6 28 07 PM" src="https://github.com/user-attachments/assets/72aed7e8-1ff7-43c3-80d7-8c3aedc7bef8">



Idea 3
Meal Prep website
This is a meal prep website for those who like to meal in advance. The main page of this website contains a popular recipes section and the rest is a recipe finder where users can apply filters to find a certain recipe based on meal type, time it takes to make the food.
The website is made interactive by having dropdowns for selecting the recipe.The recipe page will also have digestible information so that the user isn’t overwhelmed by information
It will contain clear and consistent navigation, alt text, and ensure that the text is readable

<img width="253" alt="Screenshot 2024-10-28 at 6 26 13 PM" src="https://github.com/user-attachments/assets/c1b9e37d-9ba2-4736-bc8b-04ed9930dc8a">


<img width="292" alt="Screenshot 2024-10-28 at 6 26 23 PM" src="https://github.com/user-attachments/assets/b590148f-b365-4325-bccd-b68b0587604b">


Critique:
From class, students liked the meal prep and the second idea the most. For the meal prep and I found this on youtube, students had questions about whether the recipes would be stored in a database or local storage. There were also questions about how the flow would look like for users and how would a user post their review of the recipe. I found this on youtube intends to not be a social media platform but there were questions about how to make it solely just a review website. For the meal prep website, there were questions about decision fatigue and how it can impact the users choices. Most feedback was around making the userflows for the ideas more concrete so that the user will know what to do. 
For the portfolio, I received feedback around making it more unique rather than using simple navigation and also to demonstrate skills in usability 
For I found this on youtube, I also got feedback on utilizing affordances for this concept and how it might be beneficial to think through this idea.
For the meal prep website, I was informed that this idea would require a lot of planning and how this can impact my workflow. The recipes will have to be determined using labels in order to be filtered out from the filters and this might be tough.

Feedback:
I agree with some of the feedback that I received, I understood that there are some ideas that I was very excited about but unsure of its feasibility. There is a lot to comprehend as I need to evaluate what is feasible for this project considering the time frame. I need to be more certain of my user flows so that I can get a good head start on things. For what I’m going forward with, I think a personal portfolio would be the most feasible one for this project. The other two ideas seem to be out of reach with databases. Portfolio would be a good choice as it will be very helpful to me in the future. I can add projects I like and craft my storytelling. I can achieve a good portfolio website by having interactions and animations that can engage the audience. I’m excited to see how I’m going to showcase my past work projects and add my story in this process. I need to start by thinking of getting the flow ready for the homepage and then the how to go about explaining each project and my takeaways from each.



