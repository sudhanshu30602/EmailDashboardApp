Email Dashboard App
A React Native app to track and display the number of emails in your inbox using a simple and clean UI. It includes a horizontal carousel and a dashboard with refresh and logout functionality.

Features
Secure login using email and app password

Displays total number of emails

Refresh button to fetch updated email count
Logout (Exit) functionality

Beautiful animated carousel with intro cards

Tech Stack
React Native (with Expo)

Axios for HTTP requests

Native Animated.FlatList for carousel

Email count fetched from a custom Node.js backend

shots to the screenshots/ folder.

Setup Instructions
Clone the repo:

bash
Copy
Edit
git clone https://github.com/yourusername/email-dashboard-app.git
cd email-dashboard-app
Install dependencies:

bash
Copy
Edit
npm install
Start the Expo project:

bash
Copy
Edit
npm start
Make sure the backend is running
This app expects an API endpoint at:

arduino
Copy
Edit
http://192.168.29.188:3001/get-email-count
You’ll need to run your Node.js server locally or update the IP accordingly.

 API Request Format
bash
Copy
Edit
POST /get-email-count

{
  "email": "your-email@example.com",
  "appPassword": "your-app-password"
}
✅ Response
json
Copy
Edit
{
  "totalEmails": 125
}
Testing
Manual testing only (for now). You can test the app by running it on a device or simulator through Expo Go.