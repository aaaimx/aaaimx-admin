import request from '@/services/discord'

export function getMembers () {
  return request({
    url: '/members/',
    method: 'GET'
  })
}

/**
 *
 * @param {Object} data Event data
 */
export function sendEventToDiscord (data) {
  return request({
    url: '/messages/events/reminder/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {Object} data Event data
 */
export function sendCertToDiscord (data) {
  return request({
    url: '/messages/certificates/new/',
    method: 'POST',
    data
  })
}
