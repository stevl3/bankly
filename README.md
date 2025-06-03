# Bankly - Modern Financial Dashboard

A sleek and modern financial dashboard built with Next.js, Tailwind CSS, and TypeScript. Bankly provides a comprehensive interface for managing personal finances, tracking expenses, and monitoring multiple bank accounts.

![Bankly Dashboard](public/preview.png)

## Features

- 🏦 Multi-bank account management
- 📊 Real-time financial tracking
- 💰 Expense categorization
- 📈 Budget monitoring
- 🔐 Secure authentication
- 📱 Responsive design
- 🌙 Dark mode
- 🎨 Modern UI with golden accents

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bankly.git
   cd bankly
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bankly/
├── app/                # Next.js app directory
│   ├── dashboard/     # Dashboard pages
│   ├── sign-in/       # Authentication pages
│   └── sign-up/       # Registration pages
├── components/        # React components
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## Deployment

The project can be deployed on any platform that supports Next.js applications. We recommend using Vercel for the best experience:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- UI Design inspired by modern fintech applications
- Icons provided by [Lucide](https://lucide.dev/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
