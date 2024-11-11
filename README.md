# CHorma UI - A Digital Marketplace

![Chroma UI - Digital Marketplace]([./public/banner.png](https://github.com/user-attachments/assets/9d9aac12-1a38-4012-ac7e-540002caf1d3)) 

A modern **full-stack e-commerce platform** built with cutting-edge technologies to deliver a seamless online shopping experience. This application leverages **Next.js**, **React**, **TypeScript**, and other powerful tools to ensure robustness, efficiency, and scalability.

## 🚀 Features

- **Responsive UI**: Built with Tailwind CSS for a fully responsive and consistent design.
- **State Management**: Efficient state management using Zustand.
- **Real-time Data Fetching**: Uses React Query for optimized data fetching and caching.
- **Secure Payments**: Integrated with Stripe for smooth and secure payment processing.
- **Content Management**: Features Payload CMS for easy content management by merchants.
- **API Layer**: Backend API using Express and tRPC for seamless data flow.
- **Supabase Integration**: NoSQL database for flexible data storage.
- **Authentication & Authorization**: Built-in user authentication and role-based access control.
- **Product Carousels & Sliders**: Utilizes Swiper for enhanced product displays.
- **Email Notifications**: Integrated with React-email and Nodemailer for transactional emails.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Supabase, Prisma, Kinde Auth 
- **APIs**: tRPC, Stripe API, Nodemailer
- **Utilities**: Zustand, React-hook-forms, Zod for data validation, React Query for caching
- **Other Libraries**: Shadcn-ui, Lucide-react, Resend for email retries, Swiper for UI components

## 📦 Installation

### Prerequisites
- **Node.js** (version 18+)
- **Supabase** (running of EU server hosted by Supabase team)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nanashi-101/digital-marketplace.git
   cd digital-marketplace
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file based on the `.env.example` provided.
   ```env
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** at `http://localhost:3000`.

## 🔧 Environment Variables

Ensure you have the following variables in your `.env` file:

```env
NEXT_PUBLIC_SERVER_URL=
STRIPE_SECRET_KEY=
EMAIL=
RESEND_API_KEY=
```

## 🛠️ Usage

- **Access the platform** via `[Chroma UI](https://chroma-ui-ecru.vercel.app)`.
- **Admin CMS** is available at `/sell` (or another route you define).
- **Browse and shop** products with seamless UX and secure transactions.

## 📤 Deployment

Easily deploy on **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Set up environment variables in Vercel's dashboard.
3. Deploy with one click.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe API Docs](https://stripe.com/docs/api)
- [Payload CMS](https://payloadcms.com/docs)

## 🤝 Contributions

Contributions are welcome! Feel free to open issues, suggest features, or submit pull requests.

## 📄 License

This project is licensed under the **MIT License**.
