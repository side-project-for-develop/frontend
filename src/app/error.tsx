"use client";

const error = () => {
  return (
    <div>
      <h1>error!</h1>
    </div>
  );
};

export default error;

// 동작원리
// <ErrorBoundary fallback={<Error/>}>
//      <Page/>
// </ErrorBoundary>
