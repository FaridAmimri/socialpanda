/** @format */

const { default: axios } = require('axios')

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000'
})

const createUser = (data) => axiosClient.post('/user', data)
const getUserByEmail = (email) => axiosClient.get(`/user/${email}`)

const createPost = (data) => axiosClient.post('/post', data)
const getAllPost = () => axiosClient.get('/post/')
const LikePost = (postId, data) => axiosClient.put(`/post/like/${postId}`, data)
const createComment = (data) => axiosClient.post('/comment', data)

export default {
  createUser,
  getUserByEmail,
  createPost,
  getAllPost,
  LikePost,
  createComment
}
