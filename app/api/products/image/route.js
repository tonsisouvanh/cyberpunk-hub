import { deleteImage } from "@/utils/imageUpload";

export const POST = async (req) => {
  try {
    const { imageId } = await req.json();

    await deleteImage(imageId);
    return new Response("Delete image success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Delete image failed", { status: 400 });
  }
};
