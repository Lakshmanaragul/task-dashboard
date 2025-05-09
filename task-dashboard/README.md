# Task Management Dashboard

A responsive Kanban-style task management app built using **Next.js**, **TypeScript**, **CSS Modules**, and **Drag & Drop (DND)**.

# Install Dependencies - npm install

# Run the Development Server - npm run dev

## Features

- View tasks under `To Do`, `In Progress`, and `Done`
- Add new tasks via a modal form
- Drag & drop tasks between columns
- Mock API integration using `https://jsonplaceholder.typicode.com/`
- CSS Modules for component-level styling

## Tech Stack

- Next.js 14
- TypeScript
- @hello-pangea/dnd for drag-and-drop
- Axios for API calls
- CSS Modules

## Architecture & Approach

- Monorepo Structure: All components are modular and live inside organisms/, modal/, and utils/.
- API Integration: All API interactions are abstracted in utils/api.ts.
- Drag & Drop: Implemented using @hello-pangea/dnd.
- CSS Modules: Used per component/page for scoped styling.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
