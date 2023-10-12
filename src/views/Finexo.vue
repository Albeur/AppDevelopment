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
        },
        mounted() {
            const scriptPaths = [
                '/Finexo/js/jquery-3.4.1.min.js',
                '/Finexo/js/bootstrap.js',
                '/Finexo/js/owl-carousel.min.js',
                '/Finexo/js/custom.js'
            ];

            const loadScript = (path) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = path;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
            };

            const loadScripts = async () => {
            try {
                await loadScript(scriptPaths[0]); // Load jQuery first
                for (let i = 1; i < scriptPaths.length; i++) {
                await loadScript(scriptPaths[i]);
                }
            } catch (error) {
                console.error('Failed to load scripts:', error);
            }
            };
            loadScripts();
        }
    }
</script>
<style scoped>
    @import '@/assets/Finexo/css/bootstrap.css';
    @import '@/assets/Finexo/css/style.css';
    @import '@/assets/Finexo/css/responsive.css';
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
</style>