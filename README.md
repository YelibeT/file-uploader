# File Uploader

A simple file-uploading API built with **Node.js**, **Express**, **Multer**, and **Cloudinary**. It allows users to upload files to Cloudinary and receive a secure URL for accessing them.

## Features

- Upload files using Multer.
- Store files in Cloudinary.
- Support different file types using automatic resource detection.
- Return the file URL, public ID, and format after a successful upload.
- Handle missing files and upload errors.

## Tech Stack

- Node.js
- Express.js
- Multer
- Cloudinary

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:

```bash
cd file-uploader
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

5. Start the server:

```bash
npm start
```

## API Endpoint

### Upload a File

**POST** `/api/upload`

Send a `multipart/form-data` request with:

| Key | Type |
|---|---|
| `file` | File |

Example response:

```json
{
  "message": "File uploaded successfully",
  "url": "https://res.cloudinary.com/...",
  "public_id": "example",
  "format": "pdf"
}
```

## Testing

You can test the upload endpoint using Postman:

1. Select `POST`.
2. Enter `http://localhost:3000/api/upload`.
3. Open **Body → form-data**.
4. Add a key named `file`.
5. Change its type to **File** and select a file.
6. Send the request.

## Environment Variables

Keep your Cloudinary credentials private. Never commit your `.env` file to GitHub.

## Future Improvements

- Add file deletion.
- Store file metadata in a database.
- Build a frontend for uploading and displaying files.
