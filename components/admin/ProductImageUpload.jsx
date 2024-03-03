import Promise from "promise";
const ProductImageUpload = ({ setImagesData }) => {
  const convertBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files && files.length === 1) {
      const base64 = await convertBase64(files[0]);
      //   setBase64(base64);
      setImagesData(base64);
      return;
    }

    const base64s = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const base = await convertBase64(files[i]);
        base64s.push(base);
      }
      setImagesData(base64s);
    }
  };
  return (
    <div className="mb-5">
      <label
        htmlFor="images"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Product Images
      </label>
      <input
        type="file"
        id="images"
        name="images"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        required
      />
    </div>
  );
};

export default ProductImageUpload;
