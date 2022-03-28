import React from "react";
import { Modal } from "react-bootstrap";
import { IBook } from "../../services/types";
import backgroundBook from "../../assets/images/backgroundBook.png";
import * as S from "./styles";

interface Props {
  show: boolean;
  data?: IBook;
  handleClose: () => void;
}

const BookDetailsModal: React.FC<Props> = ({
  show,
  data,
  handleClose,
}: Props) => {
  console.log(data);
  return (
    <>
      <Modal
        className="modal-access"
        show={show}
        onHide={() => handleClose()}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        size="lg"
      >
        {data && (
          <S.Container>
            <S.Image
              src={data.imageUrl ? data.imageUrl : backgroundBook}
              alt={data.title}
            />
            <S.Content>
              <S.TitleModal>{data.title}</S.TitleModal>

              <S.AuthorsModal>
                {data.authors.map((item: string, index) => (
                  <>
                    {item + `${data.authors.length - 1 === index ? "" : ", "}`}
                  </>
                ))}
              </S.AuthorsModal>

              <S.SubTitleModal isMargin>INFORMAÇÕES</S.SubTitleModal>
              <S.Contentinfo>
                <S.SubTitleModal>Páginas</S.SubTitleModal>
                <S.DescriptionModal>
                  {data.pageCount === 1
                    ? `${data.pageCount} página`
                    : `${data.pageCount} páginas`}
                </S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>Editora</S.SubTitleModal>
                <S.DescriptionModal>{`Editora ${data.publisher}`}</S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>Publicação</S.SubTitleModal>
                <S.DescriptionModal>{`Publicado em ${data.published}`}</S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>Idioma</S.SubTitleModal>
                <S.DescriptionModal>{data.language}</S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>Título Original</S.SubTitleModal>
                <S.DescriptionModal>{data.title}</S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>ISBN-10</S.SubTitleModal>
                <S.DescriptionModal>{data.isbn10}</S.DescriptionModal>
              </S.Contentinfo>
              <S.Contentinfo>
                <S.SubTitleModal>ISBN-13</S.SubTitleModal>
                <S.DescriptionModal>{data.isbn13}</S.DescriptionModal>
              </S.Contentinfo>

              <S.SubTitleModal isMargin>RESENHA DA EDITORA</S.SubTitleModal>
              <S.DescriptionModal>{data.description}</S.DescriptionModal>
              <S.DescriptionModal>{data.description}</S.DescriptionModal>
            </S.Content>
          </S.Container>
        )}
      </Modal>
    </>
  );
};

export default BookDetailsModal;
