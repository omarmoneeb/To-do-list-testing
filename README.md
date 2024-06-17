# To-do-list-testing

This is a React application that implements a simple To-Do list with internationalization (i18n) support. The application allows users to add tasks, mark them as completed, and delete them. It also supports multiple languages, including English, Spanish, and Arabic.

## Features

- Add new tasks to the To-Do list
- Mark tasks as completed
- Delete tasks from the list
- Switch between English, Spanish, and Arabic languages

## Technologies Used

- React
- Vite (build tool)
- i18next (internationalization library)
- react-i18next (React integration for i18next)
- i18next-browser-languagedetector (language detection for i18next)

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/To-do-list-testing.git

2. Install dependencies:
   cd To-do-list-testing npm install

3. Start the development server:
   npm run dev

4. Open your browser and navigate to `http://localhost:5173` to see the application.

## Building for Production

To build the application for production, run:

npm run build

This will create an optimized build in the `dist` directory.

## Internationalization

The application uses the `i18next` library for internationalization. The translation files are located in the `src/lang` directory. Currently, the application supports English, Spanish, and Arabic languages.

To add or modify translations, edit the corresponding translation objects in the `i18n.ts` file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
