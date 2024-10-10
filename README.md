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

- **Authentication:** Users need to sign in to access the anime list.
- **Data Display:** The app fetches data from AniList API and displays it with pagination.
- **Detail View:** Clicking on an anime opens a **Drawer** showing a brief overview. There is also a link to a detailed page for each item.
- **Responsive UI:** The app is built using **Chakra UI** for a clean and responsive user experience.
- **Dark/Light Mode Toggle:** Users can switch between **dark mode** and **light mode** using the toggle button in the navigation bar. Chakra UI's built-in color mode feature ensures a smooth and visually appealing transition between themes.
- **Accessibility:** Includes features like tab navigation, reduced motion for users who prefer less animation, and a focus on UX/UI best practices.

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

### Deployment

This project is deployed on Vercel.

### Future Improvements

    •	Database Integration: Currently, the app uses cookies for session management. A future iteration will involve database integration for improved scalability.
    •	More Detailed Views: Additional features like user reviews and ratings could be added in future versions.
