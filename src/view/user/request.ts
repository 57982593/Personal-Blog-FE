// import {axios, useRpcRequest} from '../../assets/hooks/requestConfig';
function useLoginReq() {
  // const { rpcRequest, grpcWeb }: any = useRpcRequest();
  // async function login(account: string, password: string) {
  //   return await axios.post('/login', { account, password });
  // }
  async function register(account: string, password: string) {
    // return await axios.post('/register', { account, password });
  }

  async function rpcRegister(account: string, password: string) {
    // const params = new grpcWeb.CreateUserReq();
    // params.setAccount(account);
    // params.setPassword(password);
    // return await rpcRequest(params, 'createUser');
  }
  return {
    // login,
    register,
    rpcRegister,
  };
}

export default useLoginReq;
