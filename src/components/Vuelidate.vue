<template>
<div>
  <div class="form-group" @submit.prevent="submit">
    <label class="form__label">Email</label>
    <input class="form__input" type="email" v-model="$v.email.$model" :class="{'borderan': $v.email.$error}"/>
  </div>
  <!-- <div class="error" v-if="!$v.email.required">Field is required</div> -->
  <!-- <div class="error" v-if="!$v.email.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div> -->
  <!-- <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view> -->
  <div class="form-group">
    <label class="form__label">Password</label>
    <input class="form__input" v-model="$v.password.$model" :class="{'borderan': $v.password.$error}"/>
  </div>
  <!-- <div class="error" v-if="!$v.password.minLength">Name must have at least {{$v.password.$params.minLength.min}} letters.</div> -->
  <button type="submit" :class="do_login">Oke done</button>
  <!-- <div class="error" v-if="!$v.password.between">Must be between {{$v.password.$params.between.min}} and {{$v.password.$params.between.max}}</div><span tabindex="0">Blur to see changes</span> -->
  <!-- <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view> -->
</div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Vuelidate',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  computed: {
    do_login: function (){
      if(!this.$v.$invalid){
        return 'changed'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="css">
  .borderan {
    border: 2px solid red;
  }
  .changed {
    background: red;
  }
</style>
