<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input v-model="desc" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label>Price</label>
            <input v-model="price" type="number" class="form-control" />
          </div>

          <button @click="makePayment" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
