import {axios} from '../../assets/hooks/requestConfig';
function useLoginReq() {
  async function login(account: string, password: string) {
    return await axios.post('/login', { account, password });
  }
  async function register(account: string, password: string) {
    return await axios.post('/register', { account, password });
  }
  return {
    login,
    register,
  };
}

export default useLoginReq;
