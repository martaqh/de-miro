<template>
   <div>
    <h1>Kochany Demirze!</h1>
    <h2>Wygląda na to, że jesteś już całkiem dużym chłopakiem.</h2>
    <h2>Może zatem sam wybierzesz swój prezent urodzinowy?</h2>
    
    <div class="gift-boxes">
        
       <div class="gift-box">
            <router-link :to="{name: 'Choice1'}">
                <img src="../assets/vecteezy_crimson-gift-box-design_.jpg" />
            </router-link>
       </div>
        <div class="gift-box">
            <router-link :to="{name: 'Choice2' }">
                <img src="../assets/vecteezy_green-gift-box-design_.jpg" />
            </router-link>
        </div>
        <div class="gift-box">
            <a href="https://miro.com/app/board/uXjVPV8rJcA=/">
                <img src='../assets/vecteezy_purple-gift-box-illustration_.jpg' />
            </a>
        </div>
    </div>
   </div>
</template>

<style lang="scss" scoped>
.gift-boxes {
    display: flex;
    flex-direction: column;
    align-items: center;

}
.gift-box {
    width: 200px;
    height: 150px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>