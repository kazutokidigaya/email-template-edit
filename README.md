# Email Template Builder

A fully customizable and user-friendly email template editor where you can preview, edit, and save stunning email designs effortlessly.

live preview(https://email-template-editor-seven.vercel.app/)

## Getting Started

Follow these steps to clone and run the project locally:

### Clone the Repository

```bash
git clone https://github.com/kazutokidigaya/email-template-edit.git
```

### Backend Setup

Craete a .env file in backend folders root directory and paste your Creditianls from mongoDb and Cloudinary in it.

```bash
MONGO_URI="---Your MongoDB Connection String---"
CLOUDINARY_CLOUD_NAME="---Cloudinary Cloud Name---"
CLOUDINARY_API_KEY="---Cloudinary Cloud API_KEY---"
CLOUDINARY_API_SECRET="---Cloudinary Cloud API_SECRET---"
```

open your terminal and follow the commands below:

```bash
cd email-template-edit/backend
npm install
npm run start
```

### Frontend Setup

open a new terminal and follow the comands below

```bash
cd email-template-edit/template-frontend
npm install
npm run start
```

## Features

Template Selection: Choose from a variety of preloaded professional email templates.

Live Preview: Preview how your email will look before making changes or sending it.

Drag-and-Drop Editor: Use the GrapesJS-powered editor to easily rearrange sections, add text, images, and components.

Responsive Design: Test your email's responsiveness for mobile, desktop, and other devices right in the editor.

Custom Styling: Change colors, backgrounds, and fonts to fit your branding needs.

Save & Download: Save your customized template or download it as an HTML file for immediate use.

Send Emails: Send your designed template directly via email using the integrated backend.
