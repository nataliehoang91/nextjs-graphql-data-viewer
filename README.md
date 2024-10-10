# Next.js GraphQL Data Viewer

This is a **Next.js** project that fetches and displays data from a public GraphQL API (AniList API). It allows users to search, view, and explore details of anime. The project is built with **Next.js 14**, **TypeScript**, **Apollo Client** for GraphQL queries, and **Chakra UI** for a responsive and accessible user interface.

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/nataliehoang91/nextjs-graphql-data-viewer.git
cd nextjs-graphql-data-viewer
npm install
```

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.

## Features

    •	Authentication: Users need to sign in to access the anime list.
    •	Data Display: The app fetches data from AniList API and displays it with pagination.
    •	Detail View: Clicking on an anime opens a Drawer showing a brief overview. There is also a link to a detailed page for each item.
    •	Responsive UI: The app is built using Chakra UI for a clean and responsive user experience.
    •	Accessibility: Includes features like tab navigation, reduced motion for users who prefer less animation, and a focus on UX/UI best practices.

## Technology Stack

    •	Next.js 14: The latest version of Next.js with App Router.
    •	TypeScript: Strong typing for the project.
    •	Apollo Client: For querying the AniList GraphQL API.
    •	Chakra UI: A component library for responsive and accessible UI.
    •	Cookies: Used for managing sessions. In a future version, this would ideally be handled with a database.

## How to Use

    1.	Sign In: Users must sign in to access the anime list.
    2.	Explore: Once signed in, users can browse a paginated list of anime titles.
    3.	View Details: Click on a title to view the anime overview in a Drawer. Follow the link in the Drawer for more details.
    4.	Accessibility: The app supports tab navigation and provides an option to reduce motion for a better user experience.

### Development

To start editing the app, modify the files in the src directory. The app will automatically update as you make changes.

### Deployment

This project is deployed on Vercel. You can deploy your own copy of the project with the following steps:

    1.	Push your code to GitHub or another source control platform.
    2.	Connect the repository to Vercel.
    3.	Deploy your Next.js project.

For more details, refer to Vercel’s documentation.

### Accessibility and UI/UX Focus

The project highlights accessibility features such as:

    •	Tab Navigation: Navigate through the app using only the keyboard.
    •	Reduced Motion: Motion can be reduced for users who prefer less animation.
    •	Responsive Design: Built using Chakra UI for a seamless experience across devices.

### Future Improvements

    •	Database Integration: Currently, the app uses cookies for session management. A future iteration will involve database integration for improved scalability.
    •	More Detailed Views: Additional features like user reviews and ratings could be added in future versions.
