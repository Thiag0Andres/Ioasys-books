import React from "react";
import { IBook } from "../../services/types";
import backgroundBook from "../../assets/images/backgroundBook.png";
import * as S from "./styles";

interface Props {
  data: IBook;
}

const CardPost: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {data && (
        <S.Container>
          <S.Image
            src={data.imageUrl ? data.imageUrl : backgroundBook}
            alt={data.title}
          />
          <S.Content>
            <S.TitleCard>{data.title}</S.TitleCard>
            {data.authors.map((item: string, index) => (
              <S.AuthorsCard key={index.toString()}>{item}</S.AuthorsCard>
            ))}
            <S.DescriptionCard>
              {data.pageCount === 1
                ? `${data.pageCount} página`
                : `${data.pageCount} páginas`}
            </S.DescriptionCard>
            <S.DescriptionCard>{`Editora ${data.publisher}`}</S.DescriptionCard>
            <S.DescriptionCard>{`Publicado em ${data.published}`}</S.DescriptionCard>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default CardPost;
