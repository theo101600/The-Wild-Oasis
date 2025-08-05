# Wild Oasis

## Overview

A full-stack hotel management dashboard for small resorts or retreats. Staff members can log in, manage cabins, handle guest bookings, and track real-time metrics—all from a modern, responsive web application.

### Login Info

Email: `theo@example.com`
Password: `password`

![Wild Oasis Homepage ](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-001.png)

## Features

- Login system using Supabase Auth.
- Add, edit, delete cabins with capacity and pricing info.
- Checkin, delete guest bookings.
- Visual dashboard to track occupancy rate, total sales, and revenue trends.
- Light/dark mode toggle

## Tech Stack

| **Category**           | **Technology / Package** | **Purpose / Functionality**                      |
| ---------------------- | ------------------------ | ------------------------------------------------ |
| **Frontend Framework** | `react`                  | Interactive component-based UI                   |
| **State Management**   | `react-query`            | Server state management and caching              |
| **Routing**            | `react-router-dom`       | Client-side navigation and route protection      |
| **Styling**            | `styled-components`      | Theming, dark mode, and responsive layout        |
| **Backend**            | `supabase`               | Auth, database (PostgreSQL), file storage        |
| **Forms**              | `react-hook-form`        | Efficient form handling and validation           |
| **Charts**             | `recharts`               | Visualize revenue, occupancy, and booking trends |
| **Utilities**          | `date-fns`               | Date formatting and operations                   |

## Project Structure

```
wild-oasis/
├── public/
├── src/
│ ├── app/
│ ├── features/
│ │ ├── cabins/
│ │ ├── bookings/
│ │ ├── dashboard/
│ │ ├── check-in-out/
│ │ ├── authentication/
│ │ └── settings/
│ ├── pages/
│ ├── ui/
│ ├── services/
│ ├── styles/
│ ├── hooks/
│ └── utils/
├── package.json
└── vite.config.js

```

## Gallery

![Login page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-001.png)
![Dashboard page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-002.png)
![Bookings page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-003.png)
![Cabins page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-004.png)
![Register page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-005.png)
![Settings page](https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images//Wild-Oasis-Screenshots-006.png)
