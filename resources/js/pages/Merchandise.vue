<template>
  <div class="pt-40 pb-20 h-screen overflow-auto">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-12">
        <vs-card class="tx-vs-card" v-for="item in 12" :key="item">
          <template #title>
            <h3>Bundle 1</h3>
          </template>
          <template #img>
            <img
              src="https://images.unsplash.com/photo-1592799093260-adbec9c7abdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0fGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </template>
          <template #text>
            <p>Rp.150.000,00</p>
          </template>
          <template #interactions>
            <vs-button
              gradient
              style="min-width: 60px"
              danger
              animation-type="scale"
            >
              <span>Check Status</span>
              <template #animate> Pending </template>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tx-table {
  width: 100%;
  text-align: center;
}
.tx-table th {
  background-color: rgb(160, 8, 8);
  padding: 1rem;
}
.tx-table td {
  padding: 1rem;
  border-bottom: 1px solid white;
  width: 400px;
}

.tx-vs-card {
  width: 300px;
  margin-left: 50px;
}
</style>