<script>

export default {
    name: 'CertificationBox',
}
</script>

<template>
    <div class="certification text-center my-5">
        <h5>Start today for getting Online Certification</h5>
        <h4>You can be your own guiding star with our help!</h4>
        <button>Get started now</button>
    </div>
    <!-- /.certification -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.certification {

    button {
        margin-top: 2rem;
        background-color: $cb_mountain;
        color: $cb_light;
        padding: 0.5rem 2rem;
        border: 0;
        border-radius: 5px;
    }
}
</style>