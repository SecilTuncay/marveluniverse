import React from "react";
import { useRouter } from "next/router";
import CharactersDetailPage from "../../components/characters/CharactersDetailPage";

const CharactersDetail = () => {
  const router = useRouter();
  const { charactersID } = router.query;
  return (
    <>
      <CharactersDetailPage charactersID={charactersID} />
    </>
  );
};

export default CharactersDetail;
