# Helping Hand - Fundraiser Campaign Website

Helping Hand is a web-based platform designed to simplify the process of running fundraising campaigns. It enables organizers to launch and manage campaigns while allowing donors to contribute to meaningful causes. The platform focuses on campaign visibility and donor engagement, providing tools to create impactful campaigns and donate globally.

### Features
- **Campaign Management**: Easily create and manage fundraising campaigns with detailed descriptions, goals, and timelines.
- **Global Donations**: Enable donors to contribute globally to campaigns and NGOs.
- **Run Your Own Campaigns**: Users can set up their campaigns with customized goals and descriptions.
- **Browse Campaigns**: Explore various active campaigns on the platform to support.
- **Contact Form Integration**: Seamlessly send messages through the contact form powered by EmailJS.
- **Local Storage Database**: Use the browser's localStorage to store campaign and donation-related data.

### Technologies Used
- **HTML/CSS/JavaScript**: Core technologies for designing the front-end user interface.
- **LocalStorage**: Used as a lightweight database for temporarily storing data in the browser.
- **EmailJS API**: Handles contact form submissions by sending emails without needing a backend.

### Impact
- **Simplified Campaign Management**: Empowers individuals to create and manage campaigns effortlessly.
- **Broadened Donor Reach**: Facilitates global donations and increases donor engagement.
- **User-Friendly Experience**: Intuitive navigation and design for both donors and organizers.

### Setup Instructions
1. **Clone the Repository**:
   - Open a terminal or command prompt.
   - Clone the repository using:
     ```bash
     git clone https://github.com/atharvarajsinha/Helping-Hand.git
     ```

2. **Open the Project**:
   - Navigate to the project directory.
   - Open the `index.html` file in a web browser to launch the website.

3. **EmailJS Integration**:
   - Sign up for an EmailJS account at [EmailJS](https://www.emailjs.com/).
   - Create a service and template in your EmailJS dashboard.
   - Update the EmailJS configuration in `script.js` with your service ID, template ID, and user ID.

4. **Test the Application**:
   - Use the functional buttons to explore the website.
   - Test the contact form to ensure emails are sent correctly.

### Repository Structure
```
Helping-Hand/
├── assets/             # Static files and assets (images, styles, etc.)
├── browse.html         # Browse campaigns page
├── crowdfund.html      # Individual campaign details page
├── data.js             # LocalStorage database and data handling
├── donation.html       # Donation form page
├── fundraiser.html     # Create or manage campaigns page
├── home.html           # Home page of the platform
├── index.html          # Landing page
├── script.js           # Main JavaScript logic (localStorage and EmailJS integration)
├── README.md           # Project documentation
```

### Contact
Developed by **Atharva Raj Sinha**. For queries, feel free to reach out:
- GitHub: [Atharva Raj Sinha](https://github.com/atharvarajsinha)
- Email: [sinhaatharva@gmail.com](mailto:sinhaatharva@gmail.com)

