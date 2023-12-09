import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "djafce1li",
    api_key: "351391283794763",
    api_secret: "oAx8a0H1vZUWU4FUMaSjxsso-Ik",
});

const imageUpload = async (image : Express.Multer.File) => {
    try {
        const fileBase64 = image.buffer.toString("base64");
        const file = `data:${image.mimetype};base64,${fileBase64}`;
        const uploadResult = await cloudinary.uploader.upload(file);
        return uploadResult;
    } catch (error) {
        throw error;
    }
};

export default imageUpload;
