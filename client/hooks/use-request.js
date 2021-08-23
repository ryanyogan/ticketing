import axios from "axios";
import { useState } from "react";
import { Dot, Note, Spacer } from "@geist-ui/react";

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      setErrors(
        err.response.data.errors.map((err) => (
          <div key={err.message}>
            <Spacer />
            <Note type="error" label={false} filled>
              <>
                <Dot />
                {err.message}
              </>
            </Note>
          </div>
        ))
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
