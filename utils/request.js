const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
// fetch all properties
async function fetchProducts() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/products`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Fail to fetch data");
    }
    return res.json();
  } catch (error) {
    return [];
  }
}

//fetch single property
async function fetchProduct(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/products/${id}`);
    if (!res.ok) {
      throw new Error("Fail to fetch data");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

export { fetchProducts, fetchProduct };
