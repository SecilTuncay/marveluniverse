import React from "react";
import { useRouter } from "next/router";
import ComicsDetailPage from "../../components/comics/ComicsDetailPage";

const ComicsDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <ComicsDetailPage id={id} />
    </>
  );
};

export default ComicsDetails;
