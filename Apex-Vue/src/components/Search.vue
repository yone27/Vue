<template>
    <section class="search">
        <h1>Track player stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="gamertag" id="gamertag" v-model="gamertag" placeholder="Origin Id, Xbox live gamertag, Psn Id, etc">
            </div>
            <div class="form-group">
                <input type="submit" value="submit" class="btn">
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                platform: "psn",
                gamertag: "",
            }
        },
        beforeCreate(){
            document.body.className = "body-bg-image"
        },
        methods: {
            onSubmit(){
                if(!this.gamertag) {
                    this.$toasted.show('please enter a gamertag',{
                        duration: 3000,
                        icon: 'exclamation-circle'
                    })
                }else {
                    this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
                }
            }
        }
    }
</script>

<style scoped>

</style>