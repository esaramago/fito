<template>
  <Stack>
    <Card
      v-for="three in threes" :key="three.code"
      :title="three.nomesistematico"
      :sub-title="three.nomecomum"
    >
      <table>
        <thead>
          <tr>
            <th>Concelho</th>
            <th>Freguesia</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in three.locations">
            <td>{{location.concelho}}</td>
            <td>{{location.freguesia}}</td>
            <td>
              <a :href="`https://fogos.icnf.pt/localizador/localizador2018.asp?latstr=${location.lat}&lonstr=${location.lon}&t=Centro`" target="_blank">Mapa</a>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </Stack>
</template>
<script src="./Threes"></script>