<template>

    <div>
    
        <p class="circle">
            <i data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="fa-solid fa-phone"></i>
        </p>
        <div class="operatore">
        
            <div class="collapse" id="collapseExample">
                <div class="card card-body text-center">
                    <i class="fa-solid fa-user-tie"></i>
                    <p><b>John Smith</b></p>
                    <p>+4684541454</p>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>

    export default {
        name: 'CallFixedComponent',
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

.circle{
    position: fixed;
    left: 10px;
    top: 450px;
    background-color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
    i{
        font-size: 40px;
        color: #fdca27;
    }
}

.operatore{
    position: fixed;
    left: 10px;
    top: 310px;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
}

   
</style>