<template>
  <div class="analysis">
     <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">Analysis</p>
                </div>
            </div>
        </section>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

    <div class="a">

      <line-chart :data="HeightchartData" xtitle="Date" ytitle="Height(cm)" width="600px" height="250px">
      </line-chart>
      <line-chart :data="WeightchartData" xtitle="Date" ytitle="Weight(kg)" width="600px" height="250px">
      </line-chart>
    </div>
  
  </div>
</template>


<script>
export default {
  name: 'chart',
  data() {
    return {
      HeightchartData: {
        '2017-05-16' : 150,
        '2017-06-16' : 155,
        '2017-07-16' : 158,
        '2017-08-16' : 158,
        '2017-09-16' : 158,
        '2017-10-16' : 158,
        '2017-11-16' : 160,
        '2017-12-16' : 161,
        '2018-01-16' : 162,
        '2018-02-16' : 165,
        '2018-03-16' : 165,
        '2018-04-16' : 165,
        '2018-05-16' : 165

      },
      WeightchartData: {
        '2017-05-16' : 43,
        '2017-06-16' : 45,
        '2017-07-16' : 48,
        '2017-08-16' : 49,
        '2017-09-16' : 50,
        '2017-10-16' : 46,
        '2017-11-16' : 48,
        '2017-12-16' : 48,
        '2018-01-16' : 60,
        '2018-02-16' : 62,
        '2018-03-16' : 62,
        '2018-04-16' : 62,
        '2018-05-16' : 61

      }
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
  div.a {
    margin-top: 20px;
    margin-left: 500px;
  } 
</style>