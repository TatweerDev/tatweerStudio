<template>
  <base-card>
    <section>
      <h2>Reqister as a developer now!</h2>
      <developer-form @save-data="saveData"></developer-form>
    </section>
  </base-card>
</template>

<script>
import DeveloperForm from '../../components/developers/DeveloperForm.vue'
import BaseCard from '../../components/ui/BaseCard.vue'
export default {
  components: {
    DeveloperForm,
    BaseCard
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('devs/registerDeveloper', data);
      this.$router.replace('/devs');
    }
  }
}
</script>