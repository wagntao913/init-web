import request from "@/utils/request";

export function getUserList() {
  return request({
    url: "/users/getUserList",
    method: "GET"
  });
}

export function login({ username, password }) {
  return request({
    url: "/users/login",
    method: "POST",
    data: {
      username,
      password
    }
  });
}

export function getUserInfoById(id) {
  return request({
    url: `/users/getUserInfo/${id}`,
    method: "GET"
  });
}
