<template>
<section class="section is-small">
  <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="book in books" :key="book.title">
          <book-display :title="book.title"
            :author="book.author"
            :image="book.image"
            :link="book.link"
            :description="book.description"></book-display>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BookDisplay from '@/components/card/HCard';

export default {
  name: 'Footer',
  components: {
    BookDisplay,
  },
  data() {
    return {
      books: [
        {
          title: 'Domain Driven Design',
          author: 'Eric Evans',
          description: 'Design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215',
        },
        {
          title: 'Implementing DDD',
          author: 'Vaughn Vernon',
          description: 'For software developers of all experience levels looking to improve their results, and design and implement domain-driven enterprise applications consistently with the best current state of professional practice, Implementing Domain-Driven Design will impart a treasure trove of knowledge hard won within the DDD and enterprise application architecture communities',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51DAelADFFL._SX365_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/gp/product/0321834577/ref=ox_sc_act_title_5?smid=ATVPDKIKX0DER&psc=1',
        },
        {
          title: 'The Lean Startup',
          author: 'Eric Ries',
          description: 'Most startups fail. But many of those failures are preventable.  The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
        },
        {
          title: 'Patterns of Enterprise Application Architecture',
          author: 'Martin Fowler',
          description: 'Patterns of Enterprise Application Architecture is written in direct response to the stiff challenges that face enterprise application developers.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51IuDvAU1CL._SX387_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/gp/product/0321127420/ref=ox_sc_act_title_4?smid=ATVPDKIKX0DER&psc=1',
        },
        {
          title: 'Design Sprint',
          author: 'Jake Knapp',
          description: 'Sprint offers a transformative formula for testing ideas that works whether you’re at a startup or a large organization. Within five days, you’ll move from idea to prototype to decision, saving you and your team countless hours and countless dollars',
          image: 'https://images-na.ssl-images-amazon.com/images/I/512V%2BzNxQ9L._SX327_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X/ref=sr_1_1?s=books&ie=UTF8&qid=1536045644&sr=1-1&keywords=design+sprint',
        },
        {
          title: 'Clean Architecture',
          author: 'Robert C.Martin',
          description: 'Martin’s Clean Architecture doesn’t merely present options. Drawing on over a half-century of experience in software environments of every imaginable type, Martin tells you what choices to make and why they are critical to your success',
          image: 'https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg',
          link: 'https://www.amazon.com/gp/product/0134494164/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1',
        },
      ],
    };
  },
};
</script>
