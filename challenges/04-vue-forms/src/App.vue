<template>
  <div class="container">
    <form v-if="!formIsSubmited">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="input your first name"
              v-model="userData.firstName"
            />
          </div>

          <div class="form-group">
            <label for="second-name">Second Name</label>
            <input
              id="second-name"
              name="second-name"
              type="text"
              placeholder="input your second name"
              v-model="userData.secondName"
            />
          </div>

          <div class="form-group">
            <label for="full-name">Is this your Full Name?</label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              placeholder="this is your full name?"
              v-model="userData.fullName"
            />
          </div>

          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="mail"
              placeholder="input your email"
              v-model="userData.mail"
            />
          </div>

          <div class="form-group">
            <label for="password">Your password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="input your password"
              v-model="userData.password"
            />
          </div>

          <div class="form-group">
            <label for="radio">Want store your datas?</label>
            <select name="radio" id="radio" v-model="selectDataOption">
              <option
                value
                v-for="option in options"
                :key="option"
                :selected="option == 'no'"
              >{{ option }}</option>
            </select>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <button class="btn btn-primary" @click.prevent="submited(), formSubmited()">Submit!</button>
            </div>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>

    <hr />

    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:{{ userData.firstName }} {{ userData.secondName }}</p>
            <p>Mail: {{ userData.mail }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ selectDataOption }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        secondName: "",
        fullName: "",
        mail: "",
        password: "",
      },
      selectDataOption: "no",
      options: ["yes", "no"],
      isSubmited: false,
      formIsSubmited: false,
    };
  },
  methods: {
    joinFullName() {
      this.fullName = this.firstName + this.secondName;
    },
    submited() {
      this.isSubmited = true;
    },
    formSubmited() {
      this.formIsSubmited = true;
    },
  },
};
</script>

<style>
form {
  margin-top: 60px;
}

.form-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
}
</style>
