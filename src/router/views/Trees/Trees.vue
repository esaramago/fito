<template>
  <Stack>
    <Card
      v-for="tree in trees" :key="tree.code"
      :title="tree.nomesistematico"
      :sub-title="tree.nomecomum"
      :code="tree.code"
    >
      <table class="c-table">
        <thead>
          <tr>
            <th>Concelho</th>
            <th>Freguesia</th>
            <th width="100">Código</th>
            <th width="40"></th>
            <th width="40"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in tree.locations">
            <td>{{location.concelho}}</td>
            <td>{{location.freguesia}}</td>
            <td>
              <template v-if="location.codes.length === 1">{{location.codigo}}</template>
              <button v-else type="button" @click="viewCodes(location.codes)">Ver todos</button>
            </td>
            <td>
              <Icon
                icon="map"
                :href="`https://fogos.icnf.pt/localizador/localizador2018.asp?latstr=${location.lat}&lonstr=${location.lon}&t=Centro`"
                target="_blank"
                title="Mapa"
              ></Icon>
            </td>
            <td>
              <Icon
                icon="picture_as_pdf"
                :href="`https://fogos.icnf.pt/SGPP/0_doBD.asp?processo=7&idRNMB=${location.cartamilitar}`"
                target="_blank"
                title="Ficha do catálogo nacional de materiais base"
              ></Icon>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </Stack>
</template>
<script src="./Trees"></script>