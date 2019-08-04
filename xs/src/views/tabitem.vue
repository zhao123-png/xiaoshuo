<template>
    <li>{{el}}</li>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState({
            tabList:state=>state.Tab.tab
        })
    },props:["el"]
}
</script>

<style scoped>

</style>
