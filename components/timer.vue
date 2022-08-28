<template>
    <div>
    {{displayday}}
    {{displayhour}}
    {{displaymin}}
    </div>
</template>
<script>
export default {
  props: ['year', 'month', 'date', 'hour', 'minute'],
  data () {
    return {
      authenticatedUser: false,
      // timerCount: 10
      displayday: 0,
      displayhour: 0,
      displaymin: 0,
      displaysec: 0,
      loaded: false,
      expired: false
    }
  },
  // data: () => ({
  //   authenticatedUser: false,
  //   // timerCount: 10
  //   displayday: 0,
  //   displayhour: 0,
  //   displaymin: 0,
  //   displaysec: 0
  // }),
  mounted () {
    this.setupFirebase()
    this.showremaining()
  },
  computed: {
    _second: () => 1000,
    _minutes () {
      return this._second * 60
    },
    _hours () {
      return this._minutes * 60
    },
    _days () {
      return this._hours * 24
    },
    end () {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute
      )
    }
  },
  methods: {
    formatNum: num => (num < 10 ? '0' + num : num),
    showremaining () {
      const timer = setInterval(() => {
        const now = new Date()
        // const end = new Date(2022, 7, 17, 0, 0)
        const distance = this.end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          this.expired = true
        }
        const day = Math.floor(distance / this._days)
        const hour = Math.floor((distance % this._days) / this._hours)
        const min = Math.floor((distance % this._hours) / this._minutes)
        // const sec = Math.floor(distance / this._days)
        this.displayday = this.formatNum(day)
        this.displaymin = this.formatNum(min)
        this.displayhour = this.formatNum(hour)
        this.loaded = true
      }, 1000)
    }
  }
}
</script>
