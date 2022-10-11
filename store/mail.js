import { sendEmail } from '~/api/emial'

export const actions = {
  async sendEmail ({ commit }, data) {
    const res = await sendEmail(data)
    return res
  }
}
