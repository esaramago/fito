import { ref } from 'vue'

import _ from 'lodash'
import stringToSlug from '@/helpers/stringToSlug'
import replaceSpecialCharacters from '@/helpers/replaceSpecialCharacters'

import loadXml from '@/helpers/loadXml'


export default {
  setup() {
    
    //#region Data
    const fileData = loadXml('src/data/data.xml').rnmblistainternet.row
    
    // remove #text property
    const data = []
    fileData.forEach(item => {
      const treeItems = {}
      Object.entries(item).forEach(([key, value]) => {
        treeItems[key] = value['#text']
      })
      data.push(treeItems)
    })
    
    // group by tree
    const trees = _.chain(data)
      .groupBy('nomesistematico')
      .map((value, key) => {

        const locations = _.sortBy(value, 'concelho')
        const filteredLocations = []
        locations.forEach(location => {
          const repeatedLocation = filteredLocations.find(x => x.lat === location.lat && x.lon === location.lon)
          if (repeatedLocation) {
            repeatedLocation.codes.push(location.codigo)
          } else {
            filteredLocations.push({
              ...location,
              codes: [location.codigo]
            })
          }
        })

        return ({
          nomesistematico: key,
          nomecomum: value[0].nomecomum,
          code: stringToSlug(key),
          locations: filteredLocations,
        })
      })
      .sortBy('nomesistematico')
      .value()

    // group by location
    const locations = ref(_.chain(data)
      .groupBy('concelho')
      .map((value, key) => {
        return ({
          concelho: key,
          distrito: value[0].distrito,
          freguesia: value[0].freguesia,
          dcnf: value[0].dcnf,
          trees: value,
        })
      })
      .sortBy('concelho')
      .value())

    const filteredTrees = ref([...trees])
    //#endregion Data

    
    //#region Events
    const viewCodes = codes => {
      alert(codes)
    }
    //#endregion Events

    //#region Filters
    const onSearch = (e) => {
      const text = e.value
      filteredTrees.value = filterTrees(text)
    }
    const filterTrees = (text) => {

      let treesList = []

      if (text) {
        trees.forEach(tree => {
          const searchText = replaceSpecialCharacters(text).toLowerCase()
          const treeName = replaceSpecialCharacters(tree.nomecomum).toLowerCase()
          const scientificName = replaceSpecialCharacters(tree.nomesistematico).toLowerCase()
          const codes = replaceSpecialCharacters(tree.locations.map(x => x.codes.map(y => y)).join(' ')).toLowerCase()
          if (treeName.search(searchText) > -1 || scientificName.search(searchText) > -1 || codes.search(searchText) > -1) {
            treesList.push(tree)
          }
        })
      } else {
        treesList = [...trees]
      }

      return treesList
    }
    //#endregion Filters

    return {
      data,
      filteredTrees,
      locations,
      viewCodes,

      onSearch,
    }
  },
}