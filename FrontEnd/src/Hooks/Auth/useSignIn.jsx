import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../Services/AuthService";
import {toast} from "react-toastify"
export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const QUERY_KEY = {
    todos: "todos",
    user: "user",
  };
  const signIn = async ( username, password ) => {

    const response = await LoginAPI(username, password);

    console.log("res", response);

    if (!response) toast.warning("login error");

    return response;
  };

  const { mutate: signInMutation } = useMutation({
    mutationFn: ({ username, password }) => signIn(username, password),
    onSuccess: (data) => {
      console.log("data",data)
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/home");
    },
    onError: () => {
      <>error</>;
    },
  });
  return signInMutation;
}
