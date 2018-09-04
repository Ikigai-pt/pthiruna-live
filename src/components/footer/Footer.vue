<template>
    <div class="container">
    <hr>
    {{random}}
      <d-quote :statement="quote.statement"
            :placeholder="quote.placeholder" :position="quote.position"></d-quote>
    </div>
</template>

<script>
import DQuote from '../quote/Quote';

export default {
  name: 'Footer',
  components: {
    DQuote,
  },
  data() {
    return {
      quote: {},
      quotes: [
        {
          statement: 'Comparision is the death of ',
          placeholder: 'joy.',
          position: 'end',
        },
        {
          statement: 'The best way to predict your future is to ',
          placeholder: 'create it.',
          position: 'end',
        },
        {
          statement: ' is the only way to sustain passion.',
          placeholder: ' Habit',
          position: 'start',
        },
        {
          statement: "Dream is not the thing you see in sleep but the one that doesn't let you ",
          placeholder: 'sleep.',
          position: 'end',
        },
      ],
    };
  },
  computed: {
    random() {
      this.update();
      return '';
    },
  },
  methods: {
    update() {
      this.quote = this.quotes[0];
      setInterval(() => {
        this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      }, 6000);
    },
  },
};
</script>
