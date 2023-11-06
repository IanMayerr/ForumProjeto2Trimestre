import axios from "axios"
import api from "./api"


const token = localStorage.getItem('token');

export const getPost = (salvarPost) => {

  axios.get(`${api}/post`, { headers: { 'Authorization': token } })
    .then((response) => {
      salvarPost(response.data)
    })
    .catch((err) => { console.log(err.response) })
}

export const createComment = (postId, comment) => {
    const body = {
      'postId': postId,
      'comment': comment
    };
  
    axios.post(`${api}/comment/create`, body, { headers: { Authorization: token } })
      .then((response) => {
        getPost()
  
      })
      .catch((error) => {
        console.error("Erro ao criar o comentário:", error);
      });
  };