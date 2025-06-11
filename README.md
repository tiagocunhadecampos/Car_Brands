# Car Brands App 🚗

<div align="center">
  <img src="assets/icon.png" alt="Car Brands Icon" width="100" height="100">
</div>

## Overview

The Car Brands App is a modern mobile application built with Expo and TypeScript that allows users to explore car brands and their respective models. The app features a clean, responsive design with user authentication and efficient data management.

## ✨ Features

- **🔐 User Authentication**: Secure login functionality with form validation
- **🚗 Car Brands Listing**: Browse through a comprehensive list of car brands
- **🔍 Search Functionality**: Search and filter car brands in real-time
- **📱 Model Navigation**: View detailed models for each selected brand
- **🎨 Modern UI**: Clean design using Styled Components
- **💾 Data Persistence**: User session management with AsyncStorage
- **🔄 State Management**: Global state management using Context API
- **📊 Real-time Counter**: Display total brands and models count
- **⚡ Performance Optimized**: Efficient rendering and navigation

## 🛠 Technologies Used

- **Expo SDK 48**: Framework for building React Native applications
- **TypeScript**: For type safety and better development experience
- **React Navigation 6**: Stack navigation between screens
- **Context API**: Global state management for authentication
- **AsyncStorage**: Local data persistence
- **Styled Components**: CSS-in-JS styling solution
- **React Hook Form**: Form state management and validation
- **Axios**: HTTP client for API requests
- **Ionicons**: Icon library for React Native

## 📁 Project Structure

```
car-brands-app/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BrandCard.tsx   # Individual brand card component
│   │   ├── LoadingSpinner.tsx # Loading indicator component
│   │   └── ModelCard.tsx   # Individual model card component
│   ├── contexts/           # React Context providers
│   │   └── AuthContext.tsx # Authentication context
│   ├── navigation/         # Navigation configuration
│   │   └── AppNavigator.tsx # Main navigation setup
│   ├── screens/            # Application screens
│   │   ├── HomeScreen.tsx  # Main brands listing screen
│   │   ├── ModelScreen.tsx # Models listing screen
│   │   └── SignInScreen.tsx# Login screen
│   ├── services/           # API service functions
│   │   └── api.ts          # API endpoints and requests
│   ├── styles/             # Styled Components files
│   │   ├── home.styles.ts  # Home screen styles
│   │   ├── model.styles.ts # Model screen styles
│   │   └── signIn.styles.ts# Sign in screen styles
│   ├── types/              # TypeScript type definitions
│   │   ├── api.ts          # API related types
│   │   ├── auth.ts         # Authentication types
│   │   ├── car.ts          # Car and brand types
│   │   ├── index.ts        # Main type exports
│   │   └── navigation.ts   # Navigation type definitions
│   └── utils/              # Utility functions
│       ├── errorHandler.ts # Error handling utilities
│       └── storage.ts      # AsyncStorage utilities
├── assets/                 # Static assets (images, fonts)
├── App.tsx                 # Main application entry point
├── app.json                # Expo app configuration
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd car-brands-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   expo start
   ```

## 🔗 API Endpoints

### Authentication

- **Login Endpoint**
  - **URL**: `https://test-api-y04b.onrender.com/signIn`
  - **Method**: `POST`
  - **Headers**: `Content-Type: application/json`
  - **Body**:
    ```json
    {
      "user": "teste",
      "password": "123"
    }
    ```
  - **Response**:
    ```json
    {
      "user": {
        "id": "1",
        "name": "Test User",
        "email": "test@example.com"
      },
      "token": "jwt-token-here"
    }
    ```

### Car Data

- **Get Car Brands**

  - **URL**: `https://parallelum.com.br/fipe/api/v1/carros/marcas`
  - **Method**: `GET`
  - **Response**: Array of brand objects
    ```json
    [
      {
        "codigo": "1",
        "nome": "Acura"
      }
    ]
    ```

- **Get Models by Brand**
  - **URL**: `https://parallelum.com.br/fipe/api/v1/carros/marcas/{brand_code}/modelos`
  - **Method**: `GET`
  - **Response**:
    ```json
    {
      "modelos": [
        {
          "codigo": "1",
          "nome": "Model Name"
        }
      ]
    }
    ```

## 📱 Usage

### Login

1. Launch the app
2. Enter credentials:
   - **Username**: `teste`
   - **Password**: `123`
3. Tap "Sign In"

### Navigation

1. **Home Screen**: Browse and search car brands with real-time counter
2. **Brand Selection**: Tap any brand card to view its models
3. **Models Screen**: View all models for the selected brand with count
4. **Logout**: Use the logout button in the header

## 🎨 Styling Architecture

The app uses **Styled Components** for styling with the following structure:

- **Separate style files**: Each screen has its own style file
- **Reusable components**: Common styled components across screens
- **TypeScript integration**: Full type safety for styled component props
- **Responsive design**: Adaptive layouts for different screen sizes

### Style Files:

- `home.styles.ts` - Home screen styling
- `model.styles.ts` - Model screen styling
- `signIn.styles.ts` - Sign in screen styling

## 🏗 Architecture Patterns

### State Management

- **Context API**: Authentication state and user data
- **Local State**: Component-specific state with useState
- **AsyncStorage**: Persistent data storage

### Type Safety

- **Comprehensive Types**: All API responses and data structures typed
- **Navigation Types**: Type-safe navigation with proper params
- **Component Props**: Full TypeScript integration

### Error Handling

- **Centralized Error Handler**: Utility functions for consistent error handling
- **User-Friendly Messages**: Clear error messages for users
- **API Error Management**: Proper HTTP error handling

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📦 Building for Production

```bash
# Build for production
expo build:android
expo build:ios

# Or using EAS Build
eas build --platform android
eas build --platform ios
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
