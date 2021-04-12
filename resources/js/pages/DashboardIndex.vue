<template>
  <div class="mt-40">
    <div class="container mx-auto">
      <div class="tx-container">
        <div class="mb-6">
          <h1 class="text-4xl font-medium">
              Selamat Datang di <span class="text-red-600">TEDx</span>UniversitasBrawijaya
            </h1>
        </div>

        <div class="">
          <div class="mb-2">
              <h1 class="font-light text-xl">Profile</h1>
          </div>
          <div
            class="border-2 border-gray-600 rounded-lg inline-block w-auto px-10 py-8"
          >
            <div class="tx-image-profile-wrapper mb-8">
              <div
                class="w-20 h-20 bg-blue-900 rounded-full inline-flex items-center justify-center"
              >
                <h1 class="font-bold text-2xl">I</h1>
              </div>
            </div>
            <div class="w-96">
              <div class="flex items-center justify-between text-sm border-b border-gray-400 py-4">
                <div class="w-1/3">
                  <label for="username">First Name</label>
                </div>
                <div class="w-2/3">
                  <div>Iqbal</div>
                </div>
              </div>
              <div class="flex items-center justify-between text-sm border-b border-gray-400 py-4">
                <div class="w-1/3">
                  <label for="username">Last Name</label>
                </div>
                <div class="w-2/3">
                  <div>Maulana</div>
                </div>
              </div>
              <div class="flex items-center justify-between text-sm border-b border-gray-400 py-4">
                <div class="w-1/3">
                  <label for="username">Username</label>
                </div>
                <div class="w-2/3">
                  <div>Iqbal Maulana</div>
                </div>
              </div>
              <div class="flex items-center justify-between text-sm border-gray-400 py-4">
                <div class="w-1/3">
                  <label for="username">Email Address</label>
                </div>
                <div class="w-2/3">
                  <div>IqbalMaulana@gmail.cmo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tx-container {
  /* border: 1px solid white; */
}
.tx-profile-wrapper {
  /* border: 1px solid red; */
  width: 40%;
}
.tx-image-profile-wrapper {
  display: flex;
  justify-content: center;
}
.tx-image-profile {
  background-color: rgba(24, 184, 224, 0.842);
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
}
.tx-image-profile h1 {
  line-height: 100px;
}
.tx-profile-card {
  border: 1px solid yellow;
  /* padding: 3rem 0; */
  /* height: 100%; */
}
.tx-form-group {
  padding: 1rem 0;
}
.tx-form-group label {
  margin-right: 50px;
}
</style>