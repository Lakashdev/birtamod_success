# Birtamode Success Hub Education frontend

Responsive React 18 and Vite frontend for Birtamode Success Hub Education.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Structure

- `src/components` reusable interface components
- `src/pages` routed pages
- `src/data` editable website copy and structured content
- `src/assets` local images and brand assets
- `src/styles` design tokens and global styles
- `src/api` API client functions for the future Laravel backend

## Editing content

All company and page content is stored in `src/data`. Edit those modules rather than writing copy directly into page components. `src/data/site.js` contains the company name as the single `COMPANY_NAME` constant.

Review `CONTENT-TODO.md` before launch. It lists unconfirmed links, incomplete source copy, and missing photography.

## Editing content panels

The visual side of each major section uses a content panel instead of photography. Edit these panels in `src/data/contentPanels.js`; the shared rendering component is `src/components/ContentPanel.jsx`.

## Connecting Laravel

Copy `.env.example` to `.env` and set `VITE_API_URL` to the Laravel API base URL. The frontend submits JSON to `POST /consultations` through `src/api/client.js`. When the variable is blank, the form opens a pre-filled email to the company address.

Expected JSON fields are `fullName`, `phone`, `email`, `qualification`, `destination`, `level`, `intake`, and `message`.
