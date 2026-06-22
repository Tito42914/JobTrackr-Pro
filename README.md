# JobTrackr Pro

JobTrackr Pro is a frontend-first rebuild of the original React/Vite JobTrackr project. It is being developed with Next.js, TypeScript, and Tailwind CSS as a polished portfolio application for managing and reviewing job applications.

The first version will use localStorage with starter data fallback. Authentication, database persistence, and other backend services are intentionally deferred until the frontend product and data model are established.

## Project Status

JobTrackr Pro is currently in its foundation phase.

Completed:

- Created the Next.js project with the App Router.
- Enabled TypeScript, Tailwind CSS, and ESLint.
- Verified the development server and linting setup.
- Defined and tested the initial application routes.
- Established the frontend-first architecture and build roadmap.
- Audited the original React/Vite project and documented the migration plan.
- Defined the core TypeScript application model.
- Added shared application status constants.
- Migrated starter data into typed records.
- Built the first typed TSX components.
- Rendered starter application data on `/applications`.
- Added the first Tailwind styling pass to the applications list.
- Connected application cards to dynamic detail routes.
- Built the first application details page from typed starter data.

Next:

- Set up the GitHub repository and make a first project checkpoint.
- Continue route flow with edit/create scaffolding.
- Design the localStorage data flow.

## Planned Features

- Dashboard overview.
- Applications list.
- Application details.
- Add, edit, and delete workflows.
- Search and status filtering.
- Application analytics.
- Form validation.
- Loading, empty, and error states.
- Responsive, accessible interface.
- LocalStorage persistence with starter data fallback.

## Planned Routes

| Route | Purpose |
| --- | --- |
| `/` | Dashboard overview |
| `/applications` | Browse and filter applications |
| `/applications/new` | Create an application |
| `/applications/[id]` | View application details |
| `/applications/[id]/edit` | Edit an application |
| `/analytics` | Review application statistics |

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- LocalStorage for initial persistence

## Architecture Direction

The application will use a typed central application model and a single source of truth for application data. The planned data layer will begin with localStorage utilities and may be exposed through a custom `useApplications` hook.

The initial frontend architecture is intended to support a future backend without requiring the interface to be rebuilt. Deferred features include authentication, database integration, user accounts, API persistence, and server-side analytics.

Current data foundation:

- `src/types/application.ts` defines the application data contract.
- `src/constants/applicationStatuses.ts` defines reusable status values and display labels.
- `src/data/starterApplications.ts` provides typed starter records for the initial localStorage-first flow.

Current UI foundation:

- `src/features/applications/components/StatusBadge.tsx` displays typed status labels.
- `src/features/applications/components/ApplicationCard.tsx` displays one typed application record.
- `src/app/applications/page.tsx` renders the starter applications through typed components.
- The applications page has an initial Tailwind layout and card styling pass.
- `src/app/applications/[id]/page.tsx` displays details for a matching starter application.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run linting:

```bash
npm run lint
```

## Documentation

Detailed development records are stored in [`docs/session-logs`](docs/session-logs).

Each dated log records:

- Work completed.
- Concepts learned.
- Architecture decisions.
- Verification performed.
- Next-session priorities.
- GitHub and portfolio communication notes.

## Current Scope

The MVP is deliberately frontend-first. The immediate goal is to produce a complete, well-structured application workflow before introducing backend complexity.
