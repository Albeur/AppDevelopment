<template>
    <div>
        <Head/>
        <Body/>
        <Footer/>
    </div>
</template>
<script>
    import Head from '@/Finexo/Head.vue';
    import Body from '@/Finexo/Body.vue';
    import Footer from '@/Finexo/Footer.vue';
    
    export default {
        name : 'Finexo',
        components : {
            Head,
            Body,
            Footer
        }
    }
</script>
<style scoped>

</style>