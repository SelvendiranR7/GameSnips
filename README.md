# 💡 GameSnips – Post and Discover App Ideas

_A project by Selvendiran R_

## 🧠 Overview

**IdeaStream** is a mobile social platform built with **React Native** where users can post their game ideas and view others’ ideas in a scrollable feed.

---
## 🗃️ Data Persistence: AsyncStorage
We used @react-native-async-storage/async-storage to persist data locally on the device.

Why AsyncStorage?
Perfect for MVPs and local-first apps

Doesn't require backend integration or API keys

Quick to set up and cross-platform

## ✅ Features & Core Features
📝 Post app Game with a title and description

🔄 Real-time updates as new ideas are posted

🔄 Validation for the create snippet screen

🧾 Persistent storage of ideas using AsyncStorage

❤️ Like or upvote ideas

## 🐞 Known Issues & Future Improvements
⛔ Only supports local storage — ideas are tied to one device

❌ No user system (anonymous use only)

🔄 Feed doesn't support sorting/filtering yet

💬 Commenting & sharing not yet implemented

⚙️ No Firebase/Supabase integration

## Architecure MVC
Promotes separation of concerns

Simplifies debugging and testing

Scales better with added complexity/features

Matches well with component-based design in React Nativ

## 🚀 Setup & Run Instructions

### 🧰 Requirements

- Node.js v23.x recommended (tested with v23.6.0)
- npm or yarn (npm v9+ or yarn v1.22+)

### 🔧 Install & Run

```bash
git clone https://github.com/SelvendiranR7/GameSnips.git
cd ideastream

# Install dependencies
npm install
# or
yarn install

# Start the development server
npx expo start
