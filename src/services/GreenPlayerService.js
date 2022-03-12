import axios from "axios";

const GREEN_PLAYER_API_BASE_URL = "https://team8lasertagbackend.herokuapp.com/api/v1/greenTeam";

class GreenPlayerService {
  savePlayer(player) {
    return axios.post(GREEN_PLAYER_API_BASE_URL, player);
  }

  getPlayers() {
    return axios.get(GREEN_PLAYER_API_BASE_URL);
  }

  deletePlayer(id) {
    return axios.delete(GREEN_PLAYER_API_BASE_URL + "/" + id);
  }

  getPlayerById(id) {
    return axios.get(GREEN_PLAYER_API_BASE_URL + "/" + id);
  }

  updatePlayer(player, id) {
    return axios.put(GREEN_PLAYER_API_BASE_URL + "/" + id, player);
  }
}

export default new GreenPlayerService();