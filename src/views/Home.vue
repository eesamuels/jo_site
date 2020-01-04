<template>
  <div id="app" style="margin-top:0px;">
      <!-- just for reference
      <span v-for="painting in paintings" :key="painting" @click="consoletest"> {{ painting.title }}: <v-img :src=" painting.img"/> </span> -->
       <div  class="mx-auto" style="width:85%" >
        <div d-inline-block id="nav">
      <span left> <v-img height="100" contain :src="`https://firebasestorage.googleapis.com/v0/b/to-do-ac295.appspot.com/o/signature.png?alt=media&token=491b826d-2db0-4bd7-b1ca-d910d1a10e5c`" /> </span> 
      <span right> GALLERY | ABOUT | CONTACT </span>
      <br> &nbsp; <br>
    </div>
        <v-card>  
          <v-container fluid>
            <!--- Row Start --->
            <v-container v-for="painting in paintings" :key="painting">
            <v-row mx-auto>
              <!--- Picture 1 --->
              
              <v-col
                class="d-flex child-flex"
                cols="6"
              >
                <v-card :elevation="5" flat tile class="d-flex">
                  <v-img
                    :src="painting.img"
                    aspect-ratio="0.75"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card >
              </v-col>
              <v-col
              class="d-flex child-flex mx-auto"
              cols="5"
              align-self="center"
              >
            <v-card :elevation="6" flat tile class="d-flex px-4" style="height: 75%; padding-top: 40px;">
              {{ painting.title }}  <br><br><br>
              {{ painting.artist_statement }} <br><br>
              {{ painting.meta }} <br><br>
            </v-card>
              </v-col>
            </v-row>
            </v-container>
          </v-container>
        </v-card >
       </div>
  </div>
</template>

<script>
  import { db } from '../firebase';

  export default {
    name: 'app',
    data() {
      return {
        paintings: [],
        title: [],
        artist_statement: [],
        meta: [],
        img: [],
      }
    },
    firestore() {
      return {
        paintings: db.collection('paintings'),
      }
    },
    methods: {
      consoletest(){
        console.log(this.$firestore.paintings)
      },
      addReptile: function() {
        this.$firestore.reptiles.add(
          {
            name: this.newReptile,
            timestamp: new Date()
          }
        );
        this.newReptile = '';
      },
      deleteReptile: function(reptile) {
        this.$firestore.reptiles.doc(reptile['.key']).delete();
      },
    },
    computed: {
      productChunks(){
          return lo.chunk(Object.values(this.products), 4);
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 50px;
  }
  .reptileList {
    list-style: none;
  }
</style>
