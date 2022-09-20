<template>
    <div class="choice">
        <h2>Piesza wycieczka na trasie Kościan-Rawicz</h2>
        <h4>Niestety ten prezent nie jest jeszcze dostępny. Musisz mieć ukończone 80 lat.</h4>
        <router-link class="button" :to="{name: 'Home'}">WYBIERZ COŚ INNEGO</router-link>
    </div> 
</template>

<style>
.choice {
    display: flex;
    flex-direction: column;
}
.button {
    padding: 30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 24px;
    text-align: center;
}
</style>