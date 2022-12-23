import React from "react";
import { useRouter } from "next/router";
import CharactersDetailPage from "../../components/characters/CharactersDetailPage";

const CharactersDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <CharactersDetailPage id={id} />
    </>
  );
};

export default CharactersDetail;
