<template>

    <div class="row">

        <div class="col">
        
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

        <div class="col">
            <p class="circle-right">
                <i data-bs-toggle="collapse" href="#collapseExampledestro" role="button" aria-expanded="false" aria-controls="collapseExampledestro" class="fa-solid fa-user-tie"></i>
            </p>
            <div class="operatore-right">
            
                <div class="collapse" id="collapseExampledestro">
                    <div class="card-operatore d-flex flex-column justify-content-between">
                        <div class="row">
                            <div class="col">
                                <div>
                                    <div class="dropdown">
                                        <i class="fa-solid fa-ellipsis" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#">Assistance</a></li>
                                          <li><a class="dropdown-item" href="#">Change Operator</a></li>
                                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col fs-12">Nome Operatore</div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text">
                                <input type="text">
                                <input type="text">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex justify-content-center"><Button>Chat Now</Button></div>
                        </div>
                    </div>
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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
    i{
        font-size: 30px;
        color: #e8b604;
    }
}

.operatore{
    position: fixed;
    left: 10px;
    top: 310px;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
}

.circle-right{
    position: fixed;
    right: 10px;
    top: 450px;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
    i{
        font-size: 20px;
        color: black;
    }
}
.operatore-right{
    background-color: white;
    position: fixed;
    right: 10px;
    top: 90px;
    box-shadow: 5px 5px 5px rgba(30, 30, 30, 0.5);
}

.card-operatore{
    width: 200px;
    height: 350px;
}
</style>