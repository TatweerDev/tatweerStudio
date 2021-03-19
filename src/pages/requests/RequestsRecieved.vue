<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Messages recieved</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-if="hasRequests && !isLoading">
          <request-item
            v-for="req in recievedRequests"
            :key="req.userId"
            :email="req.email"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-if="!hasRequests">You haven't recieved any mesages yet...</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: {
    RequestItem,
    BaseDialog
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      const req = this.$store.getters['requests/requests'];
      if (req.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || 'Something went wrong...'
      }
      
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },  
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>