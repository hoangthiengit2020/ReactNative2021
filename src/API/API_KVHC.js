import axios from 'axios';
import {API_URL} from '../configs/Evironment';

const GetKHVC_Cha = async () => {
  const respone = await axios.get(
    `${API_URL}/QuanLyDatServiceNew/QuanLyDatWebService.svc/LayDonViHanhChinhCon?maKVHC=75`,
  );
  if (respone.data) return respone;
};
const GetKVHC_Con = async ID => {
  return await axios({
    method: 'GET',
    url: `${API_URL}/QuanLyDatServiceNew/QuanLyDatWebService.svc/LayDonViHanhChinhCon?maKVHC=${ID}`,
  });
};
export default {GetKHVC_Cha, GetKVHC_Con};
