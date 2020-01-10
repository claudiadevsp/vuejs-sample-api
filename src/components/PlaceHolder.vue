<template>
    <md-card class="card-default">
        <h2>{{title}}</h2>                
    </md-card>
</template>

<script>
export default {
    name: 'comics',
    props: [ 'title']    
}
</script>

<style scoped>    
    .card-default {
        padding: 28px;
        margin: 18px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #fff;
        color:black;
    }
</style>