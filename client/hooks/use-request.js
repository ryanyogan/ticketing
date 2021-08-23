import axios from "axios";
import { useState } from "react";
import { Message } from "semantic-ui-react";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <Message
          error
          color="red"
          list={err.response.data.errors.map((err) => err.message)}
        />
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
