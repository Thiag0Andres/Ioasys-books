import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Card, Pagination } from "../../components";
import { IBooksResponse, IBook } from "../../services/types";
import api from "../../services/api";
import { useMobile } from "../../hooks/use-mobile";
import logo from "../../assets/images/logo.png";
import logoutIcon from "../../assets/images/logoutIcon.png";
import * as S from "./styles";

const Home: React.FC = () => {
  const isMobile = useMobile();

  const [data, setData] = useState<IBooksResponse>();
  //const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const loadBooks = useCallback(() => {
    setLoading(true);

    api
      .get(`/books?page=${page}&amount=${12}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NDg0NDU0NTEzNzAsImlhdCI6MTY0ODQ0OTA1MTM3MH0.T4KPOo1sD8z71P01Td49rDw4NA5NrFH42TaEiDVNdm4",
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.errors.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <S.Container>
      <S.Header>
        <S.ContentLogo>
          <S.Logo src={logo} alt="" />
          <S.Title>Books</S.Title>
        </S.ContentLogo>
        <S.ContentInfoUser>
          {!isMobile && <S.WelcomeText>Bem vindo, Guilherme!</S.WelcomeText>}
          <S.LogoutIcon src={logoutIcon} alt="" />
        </S.ContentInfoUser>
      </S.Header>
      <S.Content>
        {!loading ? (
          <>
            {data && data.data.length > 0 ? (
              <>
                <S.ContainerBooks>
                  {data.data.map((item: IBook) => (
                    <S.ListItem key={item.id}>
                      <Card data={item} />
                    </S.ListItem>
                  ))}
                </S.ContainerBooks>
                <Pagination
                  page={data.page}
                  lastPage={data.totalPages}
                  setPage={setPage}
                />
              </>
            ) : (
              <S.Title>Nenhum conteúdo encontrado</S.Title>
            )}
          </>
        ) : (
          <S.ContainerSpinner>
            <Spinner
              as="span"
              animation="border"
              role="status"
              aria-hidden="true"
            />
          </S.ContainerSpinner>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Home;
