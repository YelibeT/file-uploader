import express from 'express'
import multer from 'multer'
import cloudinary from './cloudinary.js'

const app = express()
app.use(express.json())
const upload = multer({})

app.get("/", (req, res) => {
    res.send("Server live")
})
console.log(cloudinary.config().cloud_name)

app.post("/api/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "auto"
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

            stream.end(req.file.buffer);
        });

        return res.status(200).json({
            message: "File uploaded successfully",
            url: result.secure_url,
            public_id: result.public_id,
            format: result.format
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})