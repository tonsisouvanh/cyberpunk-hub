const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
      <button
        className="btn btn-sm"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        &lt;
      </button>
      <span className="mx-2 text-neutral-500">
        Page {page} of {totalPages}
      </span>
      <button
        className="btn btn-sm"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        &gt;
      </button>
    </section>
  );
};
export default Pagination;
