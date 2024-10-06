import { Suspense, useState } from "react";
import Movie from "../components/movie";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<>로딩중</>}>
        <Movie />
      </Suspense>
    </>
  );
}
