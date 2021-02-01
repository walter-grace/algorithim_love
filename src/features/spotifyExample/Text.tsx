import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["algorithm love", "a short film about", "music", "and acid"];

const Love = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);

  return <div>{result}</div>;
};
export default Love