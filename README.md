# Budgify - Personal Finance Management Dashboard

Budgify is a modern, feature-rich personal finance management application built with Next.js. It provides an intuitive interface for tracking expenses, managing income, and visualizing financial data through interactive charts and reports.

## Features

- **Transaction Management**
  - Track both income and expenses
  - Categorize transactions
  - Add detailed descriptions and dates
  - Filter and search functionality

- **Financial Analytics**
  - Income vs Expense trends
  - Category-wise breakdown
  - Interactive charts and graphs
  - Customizable date ranges

- **Data Visualization**
  - Area charts for trend analysis
  - Bar charts for comparison
  - Pie charts for category distribution
  - Real-time updates

- **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design
  - Dark/Light mode support
  - Interactive components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Clerk account (for authentication)
- Convex account (for backend)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd budgify
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Dashboard**: View your financial overview, recent transactions, and key metrics.
2. **Transactions**: Manage and track all your financial transactions.
3. **Analytics**: Analyze your spending patterns and income sources.
4. **Reports**: Generate detailed financial reports and export data.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Clerk](https://clerk.com) - Authentication and user management
- [Convex](https://convex.dev) - Backend and real-time database
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Recharts](https://recharts.org) - Data visualization
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
