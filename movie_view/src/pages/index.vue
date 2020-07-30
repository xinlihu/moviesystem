<template lang="html">
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <div class="ContentPic">
            <index-header-pic v-for="item in headerItems" :key="item._id" :recommendImg="item.recommendImg"
             :recommendSrc="item.recommendSrc" :recommendTitle="item.recommendTitle"></index-header-pic>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <ul class="cont-ul">
                        <movies-list v-for="item in movieItems" :key="item._id" :id="item._id"
                        :movieName ="item.movieName" :movieTime="item.movieTime"></movies-list>
                    </ul>
                </div>
            </div>    
        </div>

        <div>
            <div class="contentRight">
                <ul class="cont-ul">
                    <news-list v-for="item in newsItems" :key="item._id" :id="item._id" 
                    :articleTitle="item.articleTitle" :articleTime="item.articleTime"></news-list>
                </ul>    
            </div>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import NewsList from '../components/NewsList'
import MoviesList from '../components/MoviesList'
import IndexHeaderPic from '../components/IndexHeaderPic'
import UserMessage from '../components/UserMessage'
export default {
    data(){
        return {
      headerItems:[],
      newsItems:[],
      movieItems:[]
    }
    },
    components:{
        MovieIndexHeader,
        CommonFooter,
        NewsList,
        MoviesList,
        IndexHeaderPic,
        UserMessage
    },
    created(){
        this.$http.get('http://localhost:3000/showIndex').then((data)=>{
            this.headerItems =data.body.data;
            console.log(data.body.data)
        })
        //获取新闻
        this.$http.get('http://localhost:3000/showArticle').then((data)=>{
            this.newsItems =data.body.data;
            console.log(data.body)
        })
        //获取所有电影
        this.$http.get('http://localhost:3000/showRanking').then((data)=>{
            this.movieItems =data.body.data;
            console.log(data.body)
        })
    }
}
</script>
<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
      height:50px;
  }
  .userMessage{
      padding-top:60px;
    margin-top:-10px;
    margin-left: -10px;
  }
  .contentPic{
    padding-top:5px;
  }
    .contentLeft{
        width:60%;
        float:left;
        margin-top:5px;
        border-top:1px solid #000;
    }
    .contentRight{
        width:38%;
        margin-left:1%;
        float:left;
        margin-top:5px;
        border: top 1px solid #000;
    }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #fff;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>