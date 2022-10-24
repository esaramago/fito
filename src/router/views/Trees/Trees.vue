<template>
  <Stack>
    <Card
      v-for="tree in trees" :key="tree.code"
      :title="tree.nomesistematico"
      :sub-title="tree.nomecomum"
      :code="tree.code"
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
          <tr v-for="location in tree.locations">
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
<script src="./Trees"></script>