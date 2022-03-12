import axios from "axios";

const RED_PLAYER_API_BASE_URL = "https://team8lasertagbackend.herokuapp.com/api/v1/redTeam";

class RedPlayerService {
  savePlayer(player) {
    return axios.post(RED_PLAYER_API_BASE_URL, player);
  }

  getPlayers() {
    return axios.get(RED_PLAYER_API_BASE_URL);
  }

  deletePlayer(id) {
    return axios.delete(RED_PLAYER_API_BASE_URL + "/" + id);
  }

  getPlayerById(id) {
    return axios.get(RED_PLAYER_API_BASE_URL + "/" + id);
  }

  updatePlayer(player, id) {
    return axios.put(RED_PLAYER_API_BASE_URL + "/" + id, player);
  }
}

export default new RedPlayerService();