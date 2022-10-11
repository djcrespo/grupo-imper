import request from './index'

export const sendEmail = (data) => {
  return request({
    url: '/send/',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
