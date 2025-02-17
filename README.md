# Dynamic-Webpage
Dynamic Navbar with JSON Data
GitHub Repository:
https://manikantadev34.github.io/Dynamic-Webpage/

This project demonstrates a dynamic navbar that loads content from a JSON file and displays it based on user interaction with the navbar links.

Features:
Dynamic Content: Content for the Home, About, and Contact pages is fetched from a JSON file and displayed dynamically.
Navigation: Navigate between pages (Home, About, Contact) using the navbar, which loads the corresponding content.
Project Structure:
index.html: Main HTML file with the navbar and dynamic content display.
data.json: JSON file containing the content for each page (Home, About, Contact).
style.css : CSS file for styling the navbar and content area.
script.js:For script the dynamic data.
Getting Started:
Clone or download the project files.
Ensure you have the following files:
index.html
data.json
style.css
script.js
Open index.html in your browser or use a local server to view it (e.g., Live Server in VS Code or Python’s HTTP server).
JSON Data Structure:
Here’s the structure of data.json:

[
  {
    "id": "home",
    "title": "Home Page",
    "content": "Welcome to the Home Page! This is where the homepage content will be displayed."
  },
  {
    "id": "about",
    "title": "About Us",
    "content": "This is the About Us page, where you can learn more about our company."
  },
  {
    "id": "contact",
    "title": "Contact Us",
    "content": "This page contains contact information to get in touch with us."
  }
]
How It Works:
Open index.html. The page loads the navbar and waits for you to click a link.
Each link calls the loadPage(page) function, which fetches the corresponding data from the JSON file.
The content is displayed dynamically in the #content div based on the selected page.
Example:
Clicking the Home link will display the content for the "home" section of data.json.
Similarly, clicking About or Contact will display their respective content.
Technologies Used:
HTML5
CSS3 (for basic styling)
JavaScript (for dynamic content rendering)
JSON (for storing page content)
License:
This project is open-source and can be freely used, modified, and distributed. If you make modifications, please provide appropriate attribution.

How to Run Locally:
Clone or download the repository.
Open the index.html file in any browser.
The dynamic content will be fetched and displayed as you navigate through the links.