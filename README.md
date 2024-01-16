# Demo Form Application
This Demo Form Application serves as a showcase of basic coding and deployment capabilities, featuring a frontend built with Next.js and TypeScript, and a backend powered by Node.js, Express, and MongoDB. It's a simple yet robust demonstration of a full-stack development project.

## Getting Started

The project is structured into two main directories: frontend and backend. The frontend leverages Next.js and TypeScript for an enhanced development experience and optimized performance. The backend is a Node.js server that initializes a MongoDB instance and an Express API.

### Running the Application

```bash
# Start the Next.js Frontend
npm run start:frontend

# Start the Node.js Backend Server
npm run start:backend
```

The backend server runs locally on port 5000, and the frontend application is hosted on port 3000. To view the application, navigate to http://localhost:3000 in your browser.

## Project Structure
Frontend: The web application's frontend code is located in the src/app directory. Here you can find all the React components, styles, and logic that make up the user interface.
Backend: The server logic and API endpoints are contained within the server.js file. This is where the Express server is configured, and the MongoDB database is managed

## Testing
Both the frontend and backend both use Jest as their testing framework. The test files can be found in the __tests__ folder in the frontend and backend dirs. Running the tests in the root folder is done as follows.
```bash
# Run Frontend Tests
npm run test:frontend

# Run Backend Tests
npm run test:backend
```

## CI/CD Practices


## Deployment
I chose to deploy the backend and the frontend on different platforms, Vercel (frontend) and Heroku (backend). I chose Heroku for the backend because it offers great support for Node.js applications, and a wide range of add-ons for databases and other backend services, which would be beneficial if the project were to expand. I opted for Vercel for the frontend because it is specifically optimized for Next.js applications, providing advantages like fast deployment.

## Use of AI
My use of AI tools in this project is pretty minimal. I have Github Copilot installed and running while I code. I used ChatGPT for a bit of help when writing tests for my server. I also used it for a bit of help with styling. 

## Challenges
As I am pretty familliar with Next.js, React and Typescript, developing the frontend was quick and easy. I also have experience using Express for API creation through Node.js so this wasn't dificult either, especially due to the simplicity of the API. I had never used MongoDb or really any NoSQL db service before, but for a simple task such as this, it was not a large learning curve. Depmoyment in Vercel was a breeze for the frontend, but the deployment in Heroku for the backend took much longer because of stupid mistakes. Classic dev process!

## Completion & Acknowledgement
This project was completed on January 15th, 2024. It represents a concise example of a full-stack application, showcasing essential development skills and deployment practices. In total, the project, from conception to deployment took about 10 hours. 

Thank you for exploring this Demo Form Application! Your feedback and contributions are welcome.