import request from '@/services/axios'

export function getFolders () {
  return request({
    url: '/storage/?folder=certificates',
    method: 'GET'
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/certificates/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/certificates/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/certificates/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} id String
 * @param {*} data Object
 */
export function update (id, data) {
  return request({
    url: `/certificates/${id}/`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} id String
 * @param {*} data Object
 */
export function uploadFile (id, data) {
  return request({
    url: `/certificates/${id}/upload/`,
    method: 'PATCH',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

/**
 *
 * @param {*} id String
 * @param {*} data Object
 */
export function publish (id, published) {
  return request({
    url: `/certificates/${id}/`,
    method: 'PATCH',
    data: {
      published
    }
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id) {
  return request({
    url: `/certificates/${id}/`,
    method: 'DELETE'
  })
}
