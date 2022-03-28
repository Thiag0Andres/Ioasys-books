import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMobile } from "../../hooks/use-mobile";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { Card, Pagination } from "../../components";
import { IBooksResponse, IBook } from "../../services/types";
import { RootState } from "../../store";
import { Creators as UserCreators } from "../../store/ducks/user";
import { Creators as AuthCreators } from "../../store/ducks/auth";
import api from "../../services/api";
import logo from "../../assets/images/logo.png";
import logoutIcon from "../../assets/images/logoutIcon.png";
import * as S from "./styles";

const { REACT_APP_LOCAL_STORAGE_USER_AUTH } = process.env;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMobile();

  const token = localStorage.getItem(String(REACT_APP_LOCAL_STORAGE_USER_AUTH));
  const { user } = useSelector((state: RootState) => state.user);

  const [data, setData] = useState<IBooksResponse>();
  //const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const loadBooks = useCallback(() => {
    setLoading(true);

    api
      .get(`/books?page=${page}&amount=${12}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(UserCreators.removerUser());
          dispatch(AuthCreators.logout());
          navigate("/");
        }
        toast.error(error.response.data.errors.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, navigate, page, token]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  const goLogout = useCallback(() => {
    dispatch(UserCreators.removerUser());
    dispatch(AuthCreators.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <S.Container>
      <S.Header>
        <S.ContentLogo>
          <S.Logo src={logo} alt="" />
          <S.Title>Books</S.Title>
        </S.ContentLogo>
        <S.ContentInfoUser>
          {!isMobile && user && user.name && (
            <S.WelcomeText>Bem vindo, {user.name}!</S.WelcomeText>
          )}
          <S.ButtonLogout type="button" onClick={goLogout}>
            <S.LogoutIcon src={logoutIcon} alt="" />
          </S.ButtonLogout>
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
