import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      developers: [
        {
          id: 'd1',
          firstName: 'Anton',
          lastName: 'Utkin',
          areas: ['frontend', 'design'],
          description: "I’m a Russian web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. I speaking Russian, English and Arabic languages.",
          hourlyRate: 15
        },
        {
          id: 'd2',
          firstName: 'Andrei',
          lastName: 'Salamov',
          areas: ['frontend', 'backend', 'design'],
          description: "I’m a freelance fullstack developer focused on crafting clean & user‑friendly experiences. Ready to help you anytime. Just contact me",
          hourlyRate: 20
        }
      ]
    };
  },
  mutations,
  actions,
  getters
}