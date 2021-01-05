<template>
    <div>
         <div class="loginbox">
            <img src="../assets/user.png" class="avatar">
            <h1>Welcome</h1>
            <form>
                <p>Username</p>
                <input type="text" name="" placeholder="Enter Username">
                <p>Password</p>
                <input type="password" name="" placeholder="Enter Password">
                <input type="button" name="" @click="login" value="Login">
                <!-- <a href="#">Forget password?</a><br> -->
                <a href="#">Don't have an account?</a>
       </form>
        </div>
    </div>
</template>

<script>
const axios=require('axios');

export default{
    data(){
        return {
            
        }
    },
    methods:{
        login(){
           axios.post("http://localhost:3000/api/user/login",{
               username:"admiaasdasdsd",
               password:"123456"
           }).then((response)=>{
              if(response.data.message==="success"){
                  const user=response.data.user
                  const token=response.data.token;
                  localStorage.setItem('token',token)
                  this.$store.commit("auth_success",token,user)
                  this.$router.push('/home')
                
              }
           }).catch(()=>{
               this.$store.commit("auth_error")
               localStorage.removeItem('token')
             
           })
        }
    }
}

//  axios.get(this.$store.state.questionAPI)
//     .then((response)=>{
//       this.questions=response.data.results;
//     })
//     .catch((error)=>{
//       console.log(error);
//     })

</script>


<style scoped>
body{
    margin:0;
    padding:0;
    background-size: cover;
    background-position: center;
    font-family: sans-serif;
    
}


.loginbox{
    width: 320px;
    height:420px;
    background:lightskyblue;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px 30px;
    border-radius: 24px;
}

.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: 110px;

}

h1{
    margin:0;
    padding: 5px 5px 20px;
    text-align:center
    
}

.loginbox p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}

.loginbox input{
    width: 100%;
    margin-bottom:20px;
}

.loginbox input[type="text"],input[type="password"]
{
    border: none;
    border-bottom:1px solid #fff ;
    background:transparent;
    outline: none;
    height: 40px;
    color:black;
    font-size: 16px;
}

.loginbox input[type="button"]
{
    border: none;
    outline: none;
    height: 40px;
    background:lightseagreen;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
}

.loginbox input[type="button"]:hover
{
    cursor:pointer;
    background: #ffc107;
    color: #000;
}

.loginboxa{
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;

}

.loginbox a:hover{
    color:#ffc107;
}
</style>