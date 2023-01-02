import React from "react";
import { useRouter } from "next/router";
import ComicsDetailPage from "../../components/comics/ComicsDetailPage";

const ComicsDetails = () => {
  const router = useRouter();
  const { comicsID } = router.query;
  return (
    <>
      <ComicsDetailPage comicsID={comicsID} />
    </>
  );
};

export default ComicsDetails;
