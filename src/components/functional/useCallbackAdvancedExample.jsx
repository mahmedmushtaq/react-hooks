import React, { useCallback, useEffect } from 'react';

export default (props) => {
  const callApi = useCallback(async (url) => {
    const resData = fetch(url);

    // empty array mean call only one time when component will mount
  }, []);

  useEffect(() => {
    callApi('some url');
    // whenever callback return memorized function then useEffect
    // will thhis function
  }, [callApi]);

  return <div>Advanced UseCallBack Example</div>;
};
