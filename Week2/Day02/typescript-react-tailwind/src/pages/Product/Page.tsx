import CategoryFilter from "@/components/FilterProduct";
import ProductGrid from "@/components/GridProduct";
import Pagination from "@/components/Pagination";
import type { Product } from "@/types/Product";
import { FC, useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Product: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const pageSize = 4;

  const fetchProducts = async (pageNumber: number) => {
    const offset = (pageNumber - 1) * pageSize;
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${pageSize}`);
    const data = await response.json();
    setProducts(data);
  };

  const fetchCategoriesProducts = async () => {
    const offset = (currentPage - 1) * pageSize;
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${selectedCategories.join(',')}/products?offset=${offset}&limit=${pageSize}`
    );
    const data = await response.json();
    setProducts(data);
  };

  // Reset trang khi đổi danh mục
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  // Gọi API khi có phân trang hoặc lọc
  useEffect(() => {
    if (selectedCategories.length > 0) {
      fetchCategoriesProducts();
    } else {
      fetchProducts(currentPage);
    }
  }, [selectedCategories, currentPage]);

  return (
    <section>
      <div className="flex min-h-[calc(100vh-64px)] bg-base-200 w-full justify-center">
        <div className="flex-col lg:flex-row">
          <h1 className="flex flex-row gap-2 p-2 items-center">Home<MdArrowForwardIos />Category</h1>
          <div className="flex flex-row gap-4">
            <div className="p-2">
              <CategoryFilter selected={selectedCategories} onChange={setSelectedCategories} />
            </div>
            <div className="flex flex-col gap-4 p-2">
              <ProductGrid products={products} />
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                pageSize={pageSize}
                totalPages={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;