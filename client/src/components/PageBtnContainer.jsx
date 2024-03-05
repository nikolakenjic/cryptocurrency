import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/data-slice';
import Button from '../UI/Button';

const PageBtnContainer = () => {
  const dispatch = useDispatch();
  const { pageData } = useSelector((state) => state.data);

  if (pageData.totalPages < 2) return;

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const addPageButton = ({ pageNum, activeClass }) => {
    return (
      <Button
        key={pageNum}
        onClick={() => handlePageChange(pageNum)}
        activeClass={activeClass}
        btnName={pageNum}
      />
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(
      addPageButton({ pageNum: 1, activeClass: pageData.page === 1 })
    );

    if (pageData.page > 3) {
      pageButtons.push(<Button type="button" btnName="..." />);
    }

    if (pageData.page > 2) {
      pageButtons.push(
        addPageButton({ pageNum: pageData.page - 1, activeClass: false })
      );
    }

    if (pageData.page !== 1 && pageData.page !== pageData.totalPages) {
      pageButtons.push(
        addPageButton({ pageNum: pageData.page, activeClass: true })
      );
    }

    if (pageData.page < pageData.totalPages - 1) {
      pageButtons.push(
        addPageButton({ pageNum: pageData.page + 1, activeClass: false })
      );
    }

    if (pageData.page < pageData.totalPages - 2) {
      pageButtons.push(<Button type="button" btnName="..." />);
    }

    pageButtons.push(
      addPageButton({
        pageNum: pageData.totalPages,
        activeClass: pageData.page === pageData.totalPages,
      })
    );

    return pageButtons;
  };

  return (
    <div className="btn__container">
      <Button
        type="button"
        onClick={() => {
          let prevPage = pageData.page - 1;
          if (prevPage < 1) prevPage = pageData.totalPages;
          handlePageChange(prevPage);
        }}
        btnName="Prev"
      />

      {renderPageButtons()}
      <Button
        type="button"
        onClick={() => {
          let nextPage = pageData.page + 1;
          if (nextPage > pageData.totalPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
        btnName="Next"
      />
    </div>
  );
};

export default PageBtnContainer;
