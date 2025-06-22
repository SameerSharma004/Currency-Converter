# 💱 Currency Converter

A simple and responsive currency converter web application built using **React** and **JavaScript**. This app allows users to convert values between different international currencies using real-time exchange rates fetched from an API.

---

## 🚀 Features

- 🌍 Convert between 160+ world currencies
- 🔄 Real-time exchange rate updates via external API
- 📱 Fully responsive and user-friendly UI
- ⚡ Fast performance with React hooks
- 🔃 Swap currencies with one click

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Exchange Rates API** (e.g. [fxratesapi.com](https://fxratesapi.com/))

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. **Install dependencies**
  ```bash
   npm install
  ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
## 🧠 How It Works

On load, the app fetches real-time exchange rates using an API.

Users can:

Select base and target currencies

Enter the amount to convert

View the converted result immediately

The app uses React state and useEffect for side effects like fetching data.

## 🔗 API Used

FXRates API
Endpoint example:
https://api.fxratesapi.com/latest?base=${fromCurrency}&symbols=${toCurrency}

## 🙋‍♂️ Author

Sameer Sharma

## 📌 Note

This is a learning project and may not be suitable for production use without further enhancements like error handling, caching, and security improvements.
