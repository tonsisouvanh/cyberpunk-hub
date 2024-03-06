"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import InventoryInput from "./InventoryInput";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import { CategoriesOptions } from "@/data/data";
import { fetchProduct } from "@/utils/request";
import Spinner from "../Spinner";
import Image from "next/image";
import { noimage } from "@/assets/images";
import ProductImageUpload from "./ProductImageUpload";
import { extractImageId } from "@/utils/utils";
const initialProductState = {
  name: "",
  description: "",
  importPrice: "",
  price: "",
  discount: {
    value: "",
    discountType: "percentage",
  },
  categories: [],
  ratings: "",
};

const ProductEditForm = () => {
  const [selectedDeleteImages, setSelectedDeleteImages] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [imagesData, setImagesData] = useState(null);
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const [editLoading, setEditLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [inventoryData, setInventoryData] = useState([]);
  const [newArrivalChecked, setNewArrivalChecked] = useState(false);
  const [featuredChecked, setFeaturedChecked] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [fields, setFields] = useState(initialProductState);
  useEffect(() => {
    setMounted(true);

    // Fetch product data for form
    const fetchProductData = async () => {
      try {
        const productData = await fetchProduct(id);
        //Handle categories
        setSelectedCategories(
          productData.categories.map((category) => ({
            value: category.toLowerCase(),
            label: category,
          }))
        );

        //Handle isNewArrival and isFeatured
        setNewArrivalChecked(productData.isNewArrival);
        setFeaturedChecked(productData.isFeatured);

        //Handle Inventory data
        setInventoryData(
          productData.inventory.map((inventory) => ({
            id: inventory.id,
            size: inventory.size,
            quantity: inventory.quantity,
            gender: inventory.gender,
          }))
        );

        // set images
        setImageList(productData.images);

        setFields({
          name: productData.name,
          description: productData.description,
          importPrice: productData.importPrice,
          price: productData.price,
          discount: productData.discount,
          categories: productData.categories,
          brand: productData.brand,
          ratings: productData.ratings,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setEditLoading(false);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if nested product
    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditLoading(true);
    const editProduct = async () => {
      const name = fields?.name;
      const description = fields?.description;
      const importPrice = fields?.importPrice;
      const price = fields?.price;
      const discount = {
        value: fields?.discount?.value,
        discountType: fields?.discount?.discountType,
      };
      const categories = [...selectedCategories.map((i) => i.value)];
      const brand = fields?.brand;
      const isNewArrival = newArrivalChecked;
      const isFeatured = featuredChecked;
      const ratings = fields?.ratings;
      const inventory = inventoryData;
      const ImagesInput = imagesData;
      try {
        const res = await fetch(`/api/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inventory,
            name,
            description,
            importPrice,
            price,
            discount,
            categories,
            brand,
            isNewArrival,
            isFeatured,
            ratings,
            images: ImagesInput,
            imageList,
            selectedDeleteImages,
          }),
        });

        if (res.status === 200) {
          toast.success("Updated product");
          router.push("/manage-products");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setEditLoading(false);
      }
    };
    editProduct();
  };

  const handleDeleteImage = (url) => {
    setImageList((prevImages) => prevImages.filter((image) => image !== url));
    const imageId = extractImageId(url);
    setSelectedDeleteImages((prevImages) => [...prevImages, imageId]);
  };

  if (loading) return <Spinner loading={loading} />;
  return (
    <>
      {mounted && (
        <div className="flex items-center justify-center p-12">
          {/* Author: FormBold Team */}
          <div className="mx-auto w-full lg:max-w-4xl bg-transparent rounded-lg p-4d lg:p-20d">
            {/* <div className="m-w-full flex justify-center">
              <PageHeader headerText="Edit Product" />
            </div> */}
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={fields?.name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Product Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter product description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={fields?.description}
                  onChange={handleChange}
                />
              </div>

              {/* // --------- price -------- */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="importPrice"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Import Price
                    </label>
                    <input
                      type="number"
                      name="importPrice"
                      id="importPrice"
                      placeholder="Enter import price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={fields?.importPrice}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Enter price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={fields?.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* --------- Discount -------- */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Discount Type
                    </label>
                    <select
                      name="discount.discountType"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={fields?.discount?.discountType}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed</option>
                    </select>
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Discount Value
                    </label>
                    <input
                      type="number"
                      name="discount.value"
                      id="discountValue"
                      placeholder="Enter discount value"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={fields?.discount?.value}
                      onChange={handleChange}
                      disabled={fields?.discount?.discountType === "" && true}
                    />
                  </div>
                </div>
              </div>

              {/* // --------- Image -------- */}
              <div className="mb-5">
                <ProductImageUpload
                  setImagesData={setImagesData}
                  isRequired={false}
                />
                <div className="grid grid-cols-5 gap-4 py-6">
                  {imageList.length > 0 &&
                    imageList.map((image, index) => (
                      <div key={index} className="avatar">
                        <div className="w-24 ring ring-sky-950 rounded">
                          <span
                            onClick={() => handleDeleteImage(image)}
                            className="btn btn-error btn-xs btn-circle absolute top-1 left-1"
                          >
                            x
                          </span>
                          <Image
                            src={image || noimage}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-5">
                <label
                  htmlFor="categories"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Categories
                </label>
                <Select
                  isMulti
                  value={selectedCategories}
                  onChange={setSelectedCategories}
                  options={CategoriesOptions}
                  isSearchable
                  name="categories"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* Brand */}
              <div className="mb-5">
                <label
                  htmlFor="brand"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Enter brand"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={fields?.brand}
                  onChange={handleChange}
                />
              </div>

              {/* Checkbox */}
              <div className="mb-5 gap-5 flex flex-wrap items-start max-w-full justify-between">
                <div>
                  <label
                    htmlFor="isNewArrival"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Is New Arrival
                  </label>
                  <input
                    type="checkbox"
                    name="isNewArrival"
                    id="isNewArrival"
                    className="border-[#e0e0e0] text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    value={newArrivalChecked}
                    checked={newArrivalChecked && true}
                    onChange={() => setNewArrivalChecked((prev) => !prev)}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="isFeatured"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Is Featured
                  </label>
                  <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    className="border-[#e0e0e0] text-[#6B7280] focus:border-[#6A64F1] focus:shadow-md"
                    value={featuredChecked}
                    checked={featuredChecked && true}
                    onChange={() => setFeaturedChecked((prev) => !prev)}
                  />
                </div>

                {/* Rating */}
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="ratings"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Ratings
                  </label>
                  <input
                    type="number"
                    name="ratings"
                    id="ratings"
                    placeholder="Enter ratings"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={fields?.ratings}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <InventoryInput
                inventoryData={inventoryData}
                setInventoryData={setInventoryData}
              />
              {/* Submit button */}
              <div>
                <button
                  disabled={editLoading ? true : false}
                  type="submit"
                  className="btn btn-neutral bg-sky-950 btn-block text-white"
                >
                  {editLoading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Loading
                    </>
                  ) : (
                    "Edit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductEditForm;
