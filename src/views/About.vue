<template>
  <div class="about">
	<Nav />
    <section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="columns is-8 is-variable ">
					<div class="column is-three-fifths has-text-left">
						<h1 class="title is-1 has-text-white">Contact Us</h1>
						<p class="is-size-6"> 
							Computer Engineering Department, Faculty of Engineering
                            10th-11th Floor, Witsawawattana Building,
                            King Mongkut's University of technology Thonburi
                            126 Pracha Uthit Road, Bang Mot, Thung Khru, Bangkok 10140</p>
					</div>
					<div class="column is-one-third has-text-left">
						<form class="contact-form" @submit.prevent="sendEmail">
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input is-medium" type="text" name="to_name">
							</div>
						</div>
						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input is-medium" type="text" name="from_name">
							</div>
						</div>
						<div class="field">
							<label class="label">Message</label>
							<div class="control">
								<textarea class="textarea is-medium"  name="message_html"></textarea>
							</div>
						</div>
						<div class="control">
							<button type="submit" class="button is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

    <!-- <div class="container">
      <p class="org-description is-size-4">According to the School Lunch Project of Princess Maha Chakri Sirindhorn, the Princess Debaratanarajasuda. Beginning they collect the data on paper and send it to the center. This pattern, which makes it work slowly and the data might incorrect. So, they want to bring the technology to solve this problem.</p>
      <p class="org-description is-size-4"> This project was created to track the growth of children in remote areas. In order to analyze and use the results to adjust the food so that children get proper nutrition. This project collects data of each child, that is weight, age, height and compared the child data with the WHO table</p>
    </div> -->
  
  </div>
</template>

<script>
import Nav from '../components/partials/Nav.vue';
import emailjs from 'emailjs-com'
export default {
	components: {
    Nav
  },
  methods: {
	sendEmail:  (e) => {
	emailjs.sendForm('YOUR_SERVICE_ID', 'template_zrqIQ5fa', e.target, 'user_imMtL9DhOQjybAKb2SAbF')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
		});
	} 
	
  }
}
</script>


<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
  .hero-body {
  background-color: rgb(204, 99, 204);
  }
  </style>