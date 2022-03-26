import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "../../components";
import { IBooksResponse, IBook } from "../../services/types";
import api from "../../services/api";

import * as S from "./styles";

const Home: React.FC = () => {
  const [data, setData] = useState<IBooksResponse>();
  //const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const loadBooks = useCallback(() => {
    setLoading(true);

    api
      .get(`/books?page=1&amount=${12}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NDgzMjE0MDE1MTcsImlhdCI6MTY0ODMyNTAwMTUxN30.YoQdsWQxkjSsL0n5WyG9GCmaaoOVaLNGz-17pKQF_1k",
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.errors.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <S.Container>
      <S.Content>
        <S.ContainerBooks>
          {!loading && data ? (
            <>
              {data.data.map((item: IBook) => (
                <S.ListItem key={item.id}>
                  <Card data={item} />
                </S.ListItem>
              ))}
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
        </S.ContainerBooks>
      </S.Content>
    </S.Container>
  );
};

export default Home;
