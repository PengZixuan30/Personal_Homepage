// API 基础配置
const BASE_URL = 'http://127.0.0.1:8000'

/**
 * 通用请求函数
 * @param {string} path - 接口路径，如 '/projects'
 * @returns {Promise<any>}
 */
export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`)
  if (!res.ok) {
    throw new Error(`请求失败: ${res.status}`)
  }
  return res.json()
}

export function getProjects() {
  return apiGet('/projects')
}
