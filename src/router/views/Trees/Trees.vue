<template>
  <Stack>

    <Stack gap="sm">

      <Grid>
        <Input
          label="Pesquisar"
          id="search"
          placeholder="Pesquise por ávores ou códigos"
          v-model="searchText"
          @input="filterTrees"
        ></Input>

        <Select
          label="Concelho"
          id="location"
          :source="municipalities"
          v-model="selectedLocation"
          @input="filterTrees"
        ></Select>
      </Grid>
        
      <p>
        <template v-if="treesSrc.length > 0">
          <strong>{{treesSrc.length}}</strong>
          <template v-if="treesSrc.length === 1"> árvore</template> 
          <template v-else> árvores</template> 
        </template>
        <template v-else>Nenhuma árvore encontrada</template>
      </p>
    </Stack>

    <Card
      v-for="tree in treesSrc" :key="tree.code"
      :title="tree.nomesistematico"
      :sub-title="tree.nomecomum"
      :code="tree.code"
    >
      <table class="c-table">
        <thead>
          <tr>
            <th>Concelho</th>
            <th>Freguesia</th>
            <th class="code-column">Código</th>
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
              <Icon v-else @click="viewCodes(location.codes)" icon="view_list" title="Ver todos"></Icon>
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
                disabled
              ></Icon>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </Stack>
</template>
<style src="./Trees.css" scoped></style>
<script src="./Trees.js"></script>