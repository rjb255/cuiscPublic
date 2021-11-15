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