import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Demo Form Application</h1>
            <div className="mt-2">
                <p className="text-lg">This Demo Form Application serves as a showcase of basic coding and deployment capabilities, featuring a frontend built with Next.js and TypeScript, and a backend powered by Node.js, Express, and MongoDB. It's a simple yet robust demonstration of a full-stack development project.</p>
            </div>
                <h2 className="mt-4 text-2xl font-bold">Getting Started</h2>
                <p className="text-lg">The project is structured into two main directories: frontend and backend. The frontend leverages Next.js and TypeScript for an enhanced development experience and optimized performance. The backend is a Node.js server that initializes a MongoDB instance and an Express API.</p>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Running the Application</h2>
                <pre>
                    <code>
                        # Start the Next.js Frontend
                        npm run start:frontend

                        # Start the Node.js Backend Server
                        npm run start:backend
                    </code>
                </pre>
                <p className="mt-2">The backend server runs locally on port 5000, and the frontend application is hosted on port 3000. To view the application, navigate to http://localhost:3000 in your browser.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Project Structure</h2>
                <ul>
                    <li>
                    <span className="font-bold">Frontend: </span>The web application's frontend code is located in the src/app directory. Here you can find all the React components, styles, and logic that make up the user interface.
                    </li>
                    <li>
                    <span className="font-bold">Backend: </span>The server logic and API endpoints are contained within the server.js file. This is where the Express server is configured, and the MongoDB database is managed
                    </li>
                </ul>
            </div>
            <div className="mt-2">
                <h2 className="text-2xl font-bold">Completion & Acknowledgement</h2>
                <p className="text-lg">This project was completed on January 15th, 2024. It represents a concise example of a full-stack application, showcasing essential development skills and deployment practices.</p>
                <p>
                Thank you for exploring this Demo Form Application! Your feedback and contributions are welcome.
                </p>
            </div>
        </div>
    )
}

export default FAQ;