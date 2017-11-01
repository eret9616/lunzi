<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>{{ author }}</h2>
    <ul v-for="music in musics">
     <li>
       {{music.name}}
     </li><br>
      <li>
        <img :src="music.album.picUrl" style="width:200px;">
      </li>
    </ul>
  </div>
</template>

<script>
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue代理跨域接口',
      author: 'huhao',
      musics: []
    }
  },
  mounted: function () {

    var  _this = this;

     axios.get(API_PROXY + 'http://music.163.com/api/playlist/detail?id=651828198')
     .then(function (res) {
             _this.musics = res.data.result.tracks;
             console.log(res);
     }, function (error) {
             console.log(error);
     })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
