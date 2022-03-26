import React, { useCallback, useState } from "react";
import nextPageIcon from "../../assets/images/nextPage.png";
import prevPageIcon from "../../assets/images/prevPage.png";

import * as S from "./styles";

interface Props {
  page: number;
  lastPage: number;
  setPage: any;
}

const Pagination: React.FC<Props> = ({
  page = 1,
  lastPage = 1,
  setPage,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPage(currentPage - 1);
    }
  }, [currentPage, setPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
      setPage(currentPage + 1);
    }
  }, [currentPage, lastPage, setPage]);

  return (
    <S.Container>
      <S.TextPage>{`Página ${page} de ${Math.round(lastPage)}`}</S.TextPage>
      <S.ContainerButtons>
        <S.Button type="button" onClick={handlePrevPage}>
          <S.Icon src={prevPageIcon} alt="" />
        </S.Button>
        <S.EmptySpace />
        <S.Button type="button" onClick={handleNextPage}>
          <S.Icon src={nextPageIcon} alt="" />
        </S.Button>
      </S.ContainerButtons>
    </S.Container>
  );
};

export default Pagination;
