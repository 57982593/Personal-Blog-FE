import {axios} from '../../assets/hooks/requestConfig';
function useLoginReq() {
  async function login(userName: string, password: string) {
    return await axios.post('/login', { userName, password });
  }
  async function register(userName: string, password: string) {
    return await axios.post('/register', { userName, password });
  }
  return {
    login,
    register,
  };
}

export default useLoginReq;
