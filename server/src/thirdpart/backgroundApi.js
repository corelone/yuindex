const axios = require("axios");

/**
 * 随机获取背景
 * @return {Promise<*[]>}
 */
async function getRandomBackground() {
  const api = "https://api.gmit.vip/Api/QcImg";
  return await axios.get(api).then((res) => res.data.data.url);
}

module.exports = {
  getRandomBackground,
};
