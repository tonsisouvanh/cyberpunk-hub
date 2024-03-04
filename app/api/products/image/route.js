import { deleteImage } from "@/utils/imageUpload";

export const POST = async (req) => {
  try {
    const { imageId } = await req.json();

    const result = await deleteImage(imageId);
    console.log("🚀 ~ POST ~ data:", result);

    return new Response("Delete image success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Delete image failed", { status: 400 });
  }
};
