import request from '@/services/axios'

export function fetchList (params) {
  return request({
    url: '/events/',
    method: 'GET',
    params
  })
}

/**
 *
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/events/${id}/`,
    method: 'GET'
  })
}