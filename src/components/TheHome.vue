<template lang="jade">

//Selector
.container
  select(v-model="character")
    option(value="" selected="selected") Choose a Character...
    option(v-for="person in info" selected :value="person") {{ person.name }}

  //Home--page
  .wrap.row
    .home--page.col-9.col-sm.col-md.col-lg.col-xl
      .foto--wrap
        .foto
          img(src='../assets/image(2).png')
      .text-white
        h6 Height :
        h6 Mass :
        h6 Hair color :
        h6 Skin color :
        h6 Birth year :
        h6 Gender :
    .home--page.col-3.col-sm-6.col-md-7.col-lg-8.col-xl-9
      .text-white.text-left(v-if='character')
        h6 {{ character.height }} cm
        h6 {{ character.mass }} kg
        h6 {{ character.hair_color }}
        h6 {{ character.skin_color }}
        h6 {{ character.birth_year }}
        h6 {{ character.gender }}

  //content--main
  .row.content--main
    .col-12.col-sm-12.col-xl-7
      .row.content--header(v-if='character')
        h5.col-6.text-left {{character.name}} Movie's
        h6.col-6.text-right(@click='seeMore') {{seeMores ? 'See More' : 'Less More' }}

        .row.content--detail(:class="[seeMores ? '':'active']")
          .mix-color.col-4.col-sm-4.col-md-3.col-lg-3.col-xl-3(v-for="film in video")
            .card
              .card-img
                img(src='../assets/image(1).png')
              .card-body
                h5.card-title {{film.title}}
                p.card-text Director : {{film.director}}
                p.card-text Release : {{film.release_date}}

    //content--side
    .content--side.col-12.col-xl.offset-xl-1(v-if='character')
        h5.text-left Related Another Movie's

        .cards
          .card-img.text-white
            h5.card-title {{other.title}}
            .row
              .col-5.col-sm-4.col-md-2.col-xl-5
                p.card-text Director :
                p.card-text Producer :
                p.card-text Release Date :
              .col-7.col-sm.col-md.col-xl
                p.card-text {{other.director}}
                p.card-text {{other.producer}}
                p.card-text {{other.release_date}}
          .card-body
            p {{other.opening_crawl}}
            br
            p.text-right(@click='seeMoree') {{seeMoreOne ? 'See More' : 'Less More' }}

          //- .twelve.column
          //-   pre
          //-     code {{ $data | json }}

</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

var apiURL = "https://swapi.co/api/people/?format=json"
var others = "https://swapi.co/api/films/7/"
var movies = ["https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/",
              "https://swapi.co/api/films/7/"]

export default {
  name: 'TheHome',
  data() {
    return {
      simpan: movies,
      video: [],
      character: [],
      info: [],
      other: [],
      seeMores: true,
      seeMoreOne: true
    }
  },
  mounted(){
    axios
      .get(apiURL)
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error)),

    axios
      .get(others)
      .then(response => (this.other = response.data))
      .catch(error => console.log(error))

    let multiple = url => axios
      .get(url)
      .then(response => (this.video.push(response.data)))
      .catch(error => console.log(error))

    this.simpan.map(multiple)
  },
  methods: {
    seeMore (){
      if(this.seeMores){
        this.seeMores = false;
      } else {
        this.seeMores = true;
      }
    },
    seeMoree (){
      this.seeMoreOne ? this.seeMoreOne = false : this.seeMoreOne = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

//selector
select {
  font-size: 25px;
  text-decoration: none;
  border-left: 5px solid red;
  padding-left: 20px;
  margin: 25px auto 25px -15px;

}

//home--page
.home--page {
  background: #282828;
  height: 215px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  .foto {
    height: 150px;
    width: 120px;
    margin: 15px;
    background: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-white {
    margin-top: 12px;
    h6 {
      font-size: 14px;
      font-weight: bold;
    }
  }

}

//Content--main
.content--main {
  margin-top: 30px;
  overflow: hidden;
}
.mix-color:nth-child(odd) {
  .card-img{
    background: #5b3587;
  }
}
.mix-color:nth-child(even) {
  .card-img{
    background: #e75b30;
  }
}
.content--header {
  .text-left{
    color: #e83b2f;
    padding: 5px 0;
  }
  .text-right {
    color: #61c0d8;
    padding: 5px 0;
    cursor: pointer;
    font-size: 14px;
    vertical-align: text-bottom;
  }
}
.content--detail {
  display: flex;
  height: 300px;
  overflow: hidden;
  &.active {
    height: auto;
  }
  h5 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-weight: bold;
    font-size: 14px;
  }
  p {
    font-size: 14px;
  }
}
.card {
  width: 155px;
  margin-bottom: 50px;
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  .card-img{
    width:100%;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 3px 0 0;
  }
  .card-body {
    p {
      color: #797979;
    }
  }
}
@media screen and (max-width: 460px) {
  .col-4 {
    flex: 50%;
    max-width: 50%;
  }
}

//Content--side
.content--side {
  h5.text-left {
    color: #e83b2f;
    margin-bottom: 15px;
  }
  .cards {
    width: 100%;
    border: 1px solid #d7d7d7;
    .card-img {
      height: auto;
      width: 100%;
      background: #333333;
      border-radius: 0;
      padding: 20px;
      h5, p {
        font-weight: bold;
        font-size: 16px;
      }
      p{
        font-size: 14px;
        }
      }
    }
    .card-body p {
      font-size: 14px;
      color: #797979;
      &.text-right {
        color: #61c0d8;
        cursor: pointer;
    }
  }
}

</style>
