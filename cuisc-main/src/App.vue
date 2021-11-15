<template>
    <div id="navImg1">
        <div id="navImg2"></div>
        <div class="flex" id="navImg3">
            <div>
                <img alt="Vue logo" src="./assets/logos/rect.png" width="400" />
            </div>
        </div>
    </div>

    <nav id="nav">
        <div class="flex">
            <div>
                <router-link to="/">Home</router-link>
            </div>
            <div>
                <router-link to="/about">About</router-link>
            </div>
            <div>
                <router-link to="/gallery">Gallery</router-link>
            </div>
            <div>
                <router-link to="/statutes">Statutes</router-link>
            </div>
        </div>
    </nav>
    <div style="padding: 0px 100px 50px">
        <router-view />
    </div>

    <footer>
        <div class="flex"></div>
    </footer>


</template>

<style>
#navImg1,
#navImg2,
#navImg3 {
    width: 100%;
    height: 100%;
}
#navImg1 {
    position: relative;
    background-image: url("https://source.unsplash.com/1536x864/daily?IceSkating");
    background-attachment: fixed;
}
#navImg2 {
    position: absolute;
    background-color: aliceblue;
    opacity: 0.4;
    z-index: 4;
}

#navImg3, #navImg3>div {
    z-index: 5;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}

#nav {
    padding: 30px;
    position: sticky;
}

#nav a {
    font-weight: bold;
    color: #19251d;
}

#nav a.router-link-exact-active {
    color: #A3C1AD;
}

div.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

body {
    margin: 0;
    height: 100%;
    width: 100%;
}
html {
    height: 100%;
}

footer {
    width: 100%;
    height: 50px;
    background-color: #19251d;
}
</style>

<script lang="ts">
import Vue from 'vue'
import $ from 'jquery'
export default{
    mounted() {
        
        function resize(){
            var navHeight: any = $('#nav').outerHeight()
            $('#navImg1').height(window.innerHeight-navHeight)
        }
        window.onresize = resize
        resize()
    },

}

</script>