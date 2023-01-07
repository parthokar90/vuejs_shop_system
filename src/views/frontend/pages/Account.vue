<template>
    <!-- start account area -->
    <section class="account-page account p80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="item login text-center">
                        <h4>Login</h4>
                        <p>Login if you are a returning customer.</p>
                        <form action="#!">
                            <input v-model="email" type="email" placeholder="e-mail address" class="inputs">
                            <input v-model="password" type="password" placeholder="password" class="inputs">
                            <button @click="login" type="button" class="button-style1">login <span class="btn-dot"></span></button>
                        </form>
                        <span class="or">or</span>
                        <ul class="d-flex">
                            <li><a href="#!" class="fb">facebook</a></li>
                            <li><a href="#!" class="gl">google</a></li>
                            <li><a href="#!" class="tw">twitter</a></li>
                        </ul>
                        <h5>Don't Have an Account? Sign up now</h5>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item signin">
                        <h4>Create an Account</h4>
                        <p>Register here if you are a new customer.</p>
                        <form action="#!">
                            <input v-model="registerData.name" type="text" placeholder="username" class="inputs">
                            <input v-model="registerData.email" type="email" placeholder="e-mail address" class="inputs">
                            <input v-model="registerData.password" type="password" placeholder="password" class="inputs">
                            <button @click="registration" type="button" class="button-style1">submit & register <span class="btn-dot"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end account area -->
</template>

<script>
 import axios from 'axios'
 export default {
    data: function() {
      return {
        email: null,
        password: null,
        registerData:{
          name:null,
          email:null,
          password:null,
        },
      }
    },
    methods: {

    registration(){
        axios.post('register', this.registerData)
          .then(response => {
               alert(response);


                    if(response.data.data.name!=null){
                        this.$toast.error(response.data.data.name,{
                           position: "top-right",
                        });
                     }

                     if(response.data.data.email!=null){
                         this.$toast.error(response.data.data.email,{
                         position: "top-right",
                        });
                     }

                    if(response.data.data.password!=null){
                        this.$toast.error(response.data.data.password,{
                        position: "top-right",
                        });
                     }

                  
                     
                       this.$toast.success(response.data.data.message,{
                        position: "top-right",
                      });
                     
                    

          })
          .catch(error => {
            console.log(error.response);
          });
    },

    login() {
        axios.post(`login`, {
          email: this.email,
          password: this.password
       })

      .then(response => {
          if(response.data.token!=null){
          this.$toast.success(response.data.message,{
            position: "top-right",
          });
            localStorage.setItem('token', response.data.token );
            this.$router.push('/');
          }
          else{
                this.$toast.error(response.data.data.email,{
                  position: "top-right",
                });
                this.$toast.error(response.data.data.password,{
                  position: "top-right",
                });
          }
      })
      
      .catch(error => { 
            if (error.response.data.error === 'Credentials do not match') {
                this.$toast.error(error.response.data.message,{
                    position: "top-right",
                });
              } else {
                this.$toast.error(error.response.data.message,{
                    position: "top-right",
                });
              }
           })
        },
      },
  };
</script>