<template>
  <div class="event-single">
    <Nav />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '../components/partials/Nav.vue';
export default {
  name: 'EventSingle',
  components: {
    Nav
  },
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'I Dont know page',
          category: 'Rai dee',
          description: 'Give me later',
          featuredImage: 'https://www.thescienceofpsychotherapy.com/wp-content/uploads/2017/06/omission.jpg',
          images: [
            'https://i.redd.it/uo0u67glvlq01.jpg',
            'https://i.redd.it/uo0u67glvlq01.jpg',
            'https://i.redd.it/uo0u67glvlq01.jpg',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 2,
          name: 'asdsadasdasd',
          category: 'asdokasdasd',
          description: 'asddsads',
          featuredImage: 'https://i.redd.it/uo0u67glvlq01.jpg',
          images: [
            'https://i.redd.it/uo0u67glvlq01.jpg'
          ],
          location: '1234 Dog Alley',
          date: '11-21-2019',
          time: '12:00'
        }
      ],
      event: {}
    }  
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: rgb(204, 99, 204);
}
</style>