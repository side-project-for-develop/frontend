const loading = () => {
  return <div>loading..</div>;
};

export default loading;

// 동작원리
// <Suspense fallback={<Loading/>}>
//      <Page/>
// </Suspense>
