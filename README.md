Assessment Test

The project is organized into several components, each of which is designed to handle a specific part of the application.


Here's the documentation format for the libraries and frameworks used:

Libraries and Frameworks Used

1. React Router

Purpose: A popular library for handling routing in React applications. It enables the navigation between different components and views by utilizing URLs, making single-page applications (SPA) easier to manage.
Installation:
bash
npm install react-router-dom

2. FontAwesome

Purpose: A toolkit for icons and social logos. FontAwesome provides a large collection of scalable vector icons to enhance the UI and UX of web applications.
Installation:
bash
npm install react-fontawesome

3. Tailwind CSS

Purpose: A utility-first CSS framework that enables fast UI design by providing pre-built classes for responsiveness, colors, spacing, typography, and other layout features.
Installation:
bas
npm install tailwindcss

4. Framer Motion

Purpose: A library for animations and transitions in React. It allows easy integration of smooth and interactive animations, enhancing the user experience.
Installation:
bash
npm install framer-motion

5. ProgressBar

Version: [Specify version if necessary]
Purpose: A simple progress bar component that provides visual feedback to users on the progress of an ongoing process, commonly used for file uploads, form submissions, etc.
Installation: [Specify package if necessary]
bash
npm install react-progressbar

### Components

The components in the `components` folder are organized into three main parts:

1. **Verify**: This folder contains the `VerifyOTP` component, which is responsible for OTP verification. It includes the logic to handle the user’s OTP input and validate the received code.

2. **Information**: This folder contains the `InfoInput` component, which manages the user’s personal information, such as name, email, and other required details.

3. **Send**: This folder contains the `SendOTP` component, which handles sending the OTP to the user's provided contact (email or phone).

COMPONENTS OVERVIEW

A. Verify

1. VerifyOTP.jsx
This is the main component that renders the OTP verification page. It includes two sections:

Left Section: Displays the background and layout cards.
Right Section: Contains the title, main content, and footer.
2. Title.jsx
This component renders the logo and title (SwoyeshShrestha).

3. Subtitle.jsx
Displays the OTP verification message with the masked email address, ensuring user privacy.

4. Subinput.jsx
This component is used for rendering individual OTP input fields. It limits the input to a single digit and ensures that only numeric values can be entered.

5. Input.jsx
The main input field component that handles OTP input. It manages the state for the input fields and passes the updated values back to the parent component to enable or disable the submit button.

6. Button.jsx
This component renders a submit button that is enabled only when all OTP input fields are filled.

7. Main.jsx
This component is responsible for handling the state of the OTP input and the submit button. It passes the input data to the parent component (VerifyOTP.jsx).

8. Cards.jsx & Card.jsx
Cards.jsx contains multiple Card components that display location and company details. The Card.jsx component is used to render individual cards with a country flag, company name, description, and location.

9. Footer.jsx
This component renders the footer section of the page.

10. Back.jsx
The Back component renders a back button with an arrow icon using FontAwesome. When clicked, it navigates the user back to the /SendOTP page.

B. Send

1. SendOTP.jsx
This component serves as the main container for the OTP request page. It includes the title, email input field, and footer section, along with motion effects for smooth transitions.

2. SendTitle.jsx
This component renders the logo and title of the app at the top of the page, with responsive styling for various screen sizes.

3. SendMain.jsx
This component manages the email input and validates the email address. It displays an error message for invalid emails and navigates to the OTP verification page when valid.

C. Information

1. UploadFile
Displays a file upload section with a title, description, and a file upload button.

2. SmallSelect
A simple dropdown selector with a required field label.

3. SmallInput
A customizable input field with a required label and placeholder text.

4. PBar:
A progress bar that shows the completion status of a multi-step form, with visual indicators for each step.

5. MiniSelect
A component that displays two select dropdowns side by side.

6. InfoInput
A page that includes a multi-step progress bar and a form with various input fields.

7. FormInput
A form component with multiple input fields, dropdowns, textareas, and file upload sections.

8.Form
A form layout that includes fields for business details, along with the form input components.


If the deployment issue could not be resolved after multiple attempts, here's how you could document it in a structured way:

### Problem Overview

1. Development Phase:

The development part was completed without any significant challenges. All components and dependencies such as React Router, FontAwesome, Tailwind, Framer Motion, and ProgressBar were integrated and working as expected.

2. Deployment Issue:

The issue arose during the deployment phase.
Despite multiple attempts to resolve the problem, the deployment failed, and the error continued to appear.

### Error Details

Error Message:

Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/jsx". Strict MIME type checking is enforced for module scripts per HTML spec.

![image](https://github.com/user-attachments/assets/0787d51b-7022-431a-b71c-af66edce0563)

![image](https://github.com/user-attachments/assets/77a01ac7-af12-4c63-a0ae-acb47f5a0271)


Deployed multiple times to see if the error was transient.
Result: The error persisted even after multiple redeployments.

Steps Taken to Resolve the Issue

1. Changing Absolute Paths to Relative Paths:

Changed all absolute paths in the project (e.g., for images, components, etc.) to relative paths to avoid issues with the deployment environment not resolving absolute paths correctly.
Result: The error persisted despite this change.
Adding vercel.json File:

2. Added and modified the vercel.json configuration file to include necessary settings like redirects, rewrites, or static file paths.

Result: The error was not resolved after adding and adjusting the vercel.json configuration.
Testing with Different Homepage Configurations in package.json:

3. Tried setting different homepage values in the package.json file, as this sometimes resolves deployment issues with routing or static assets.

Result: This did not fix the deployment error.
Re-deploying After Each Change:

4. After each change (paths, vercel.json, package.json), I attempted to redeploy the application to Vercel.
   
Result: The error remained unresolved, even after multiple redeployment attempts.
Checking for Build and Static File Issues:

5. Investigated whether the build process was causing the issue, especially related to static files or missing dependencies during deployment.

Result: The issue persisted.

6. Tried deploying on different platforms (e.g., Github, Vercel).
   
Result: The same error occurred on all platforms.

Current Status

Unable to resolve the issue: Despite multiple troubleshooting steps and attempts to fix the issue, the deployment problem remains unresolved.
Further Steps Needed: Additional research or help from deployment platform support may be required to fully resolve the issue.
Due to multiple attempts in Vercel following error occured:
![image](https://github.com/user-attachments/assets/666d0b09-28c0-4daf-a0e8-094ef8e1730f)


Conclusion

The development process was smooth, but the deployment phase encountered significant issues that could not be resolved despite several attempts.
The error persists, and further steps are needed to identify the root cause and resolve the deployment problem.

Demo

https://github.com/user-attachments/assets/ed166360-c04a-4f82-9979-f70e8d1123ac
