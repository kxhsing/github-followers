GitHub Followers
===========================
App that allows for a user to search for a GitHub username and find their followers.</br>
**[Try out the deployed application here!](https://find-github-followers.herokuapp.com/)**

## Table of Contents
* [Problem & Solution](#process)
* [Technologies](#technologies)
* [Installation](#install)
* [Public Profile](#author)
* [Other Project: ChefBox](#projects)

## <a name="process"></a>Problem & Solution

**Problem**</br>
App that allows for a user to search for a GitHub username. On a successful search return, it display the user's GitHub handle, follower count, and a list of the user's followers. Since some users (e.g. gaearon, holman, etc.) have many thousands of followers, GitHub only returns a portion of the followers with each request. There is a "load more" button that, when clicked, fetches the next payload of followers. This button should persist until there are no more pages of followers to fetch.

**Solution**</br>
Create an SPA that would allow users to input a GitHub username and search, if it's a valid username, 
the user's info (name, GitHub username, link to their GitHub page, and number of followers) will be displayed, with a grid  of their followers displayed on the right. If an invalid username is input, the user will be asked to search for one again.

When the user clicks on a follower, the app will update the search query to that username, display the aforementioned profile info on the page, and that username's respective followers.


## <a name="technologies"></a>Technologies

**Technical Choices**</br>
I decided to go with a simple SPA using **AngularJS, HTML, and some CSS and Bootstrap** for styling. Since there was no need for a database and everything was done client side I did not feel it necessary to use other parts of the MEAN stack. I'm fairly new to building apps with Javascript, as Python and Flask has been my primary language and framework for building web applications, but I had a lot of fun learning how to develop applications with Javascript as the core language!

If given more time, I would have liked to include a feature to suggest 10 alternative choices usernames if the user input was invalid or returned multiple search results. For instance, if the user searched "kx", the app would provide 10 username suggestions that starts with those letters. 

Another feature to add if given more time would be to add the option for users to follow the profile of the searched username on GitHub, which would have required a two-step authentication process.


**Tradeoffs**</br>
During development, to increase the rate limiting for requests to the GitHub API, I generated a personal access token and included it in my request parameters to increase it from 60/hr to 5000/hr (and exported as an environmental variable into my app). However, for deployment purposes I removed my PAT, which is a tradeoff in terms of being able to query for more results per hour.


## <a name="install"></a>Installation

To run the job queue:

Clone or fork this repo:

```
https://github.com/kxhsing/github-followers.git
```

To have this app running on your local computer:
Navigate to project folder and install dependencies.

```
npm init
npm install
```

Run the app:

```
http-server -o
```

You can now start using the app!


## <a name="author"></a>Public Profile
Hi! My name is [Karen Hsing](https://www.linkedin.com/in/karenhsing/). I graduated from Hackbright Academy's Software Engineering Fellowship Program, an engineering bootcamp for women in San Francisco (graduation: April 2017). 

Prior to Hackbright I was an account manager at a marketing agency where I led our marketing team and worked with 15 different clients from the tech, lifestyle, and hospitality industries to create personalized solutions for their different marketing needs, including branding, digital marketing, event sponsorships, and more.

Here are links to my profiles on various platforms:
* [GitHub Portfolio Link](https://kxhsing.github.io/)
* [LinkedIn](https://www.linkedin.com/in/karenhsing/)
* [Twitter](https://twitter.com/karenhsing)

## <a name="projects"></a>Other Project: ChefBox
[ChefBox](https://github.com/kxhsing/chefbox) is an all-in-one tool for aspiring chefs and home cooks to discover recipes, save memories of their culinary accomplishments, and reduce food waste. ChefBox searches for recipes based on users' available ingredients, personal preferences, and dietary restrictions. 






