<template>
  <vs-table>
    <template #thead>
      <vs-tr>
        <vs-th> Size </vs-th>
        <vs-th> Lebar </vs-th>
        <vs-th> Panjang </vs-th>
        <vs-th> Lengan </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr v-for="(size, index) in sizeChart" :key="index" :data="tr">
        <vs-td>
          {{ size.size }}
        </vs-td>
        <vs-td>
          {{ size.lebar }}
        </vs-td>
        <vs-td>
          {{ size.panjang }}
        </vs-td>
        <vs-td>
          {{ size.lengan }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  data() {
    return {
      sizeChart: [
        {
          size: "SM",
          lebar: "46cm",
          panjang: "69cm",
          lengan: "20cm",
        },
        {
          size: "M",
          lebar: "50cm",
          panjang: "71cm",
          lengan: "21cm",
        },
        {
          size: "L",
          lebar: "53cm",
          panjang: "73cm",
          lengan: "22cm",
        },
        {
          size: "XL",
          lebar: "56cm",
          panjang: "76cm",
          lengan: "24cm",
        },
        {
          size: "2XL",
          lebar: "59cm",
          panjang: "78cm",
          lengan: "25cm",
        },
        {
          size: "3XL",
          lebar: "60cm",
          panjang: "81cm",
          lengan: "26cm",
        },
        {
          size: "4XL",
          lebar: "64cm",
          panjang: "82cm",
          lengan: "26cm",
        },
      ],
    };
  },
};
</script>

<style>
</style>