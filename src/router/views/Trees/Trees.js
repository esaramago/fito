import { ref } from 'vue'

import _ from 'lodash'
import stringToSlug from '@/helpers/stringToSlug'
import replaceSpecialCharacters from '@/helpers/replaceSpecialCharacters'

import loadXml from '@/helpers/loadXml'

export default {
  setup() {
    
    //#region Data
    const fileData = loadXml('/data/data.xml').rnmblistainternet.row
    
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

    const treesSrc = ref([...trees])

    const municipalities = ref(getMunicipalities(data))
    
    //#region Events
    const viewCodes = codes => {
      alert(codes)
    }
    //#endregion Events

    //#region Filters
    const searchText = ref('')
    const selectedLocation = ref('')
    const filterTrees = () => {

      setTimeout(() => {

        let treesList = [...trees]
        
        if (searchText.value || selectedLocation.value) {
          treesList = filterByMunicipality(treesList, selectedLocation.value)
          treesList = filterByText(treesList, searchText.value)
        } else {
          treesList = [...trees]
        }
        
        treesSrc.value = treesList
      }, 1);

    }

    //#endregion Filters

    return {
      data,
      treesSrc,
      municipalities,
      searchText,
      selectedLocation,
      viewCodes,

      filterTrees,
    }
  },
}


const getMunicipalities = data => {

  const uniqueMunicipalities = []

  data.forEach(mun => {
    const isRepeated = uniqueMunicipalities.find(x => x.description === mun.concelho)
    if (!isRepeated) {
      uniqueMunicipalities.push({
        description: mun.concelho,
        id: stringToSlug(mun.concelho),
      })
    }
  })
  const orderedMunicipalities = _.sortBy(uniqueMunicipalities, 'description')

  return orderedMunicipalities
}

const filterByMunicipality = (treesList, selectedLocation) => {

  if (!selectedLocation) return treesList

  const filteredTrees = []

  treesList.forEach(tree => {
    const municipalities = tree.locations.map(x => stringToSlug(x.concelho))
    const sameLocation = municipalities.includes(selectedLocation)
    if (sameLocation) {
      filteredTrees.push(tree)
    }
  })
  
  return filteredTrees
}
const filterByText = (treesList, text = '') => {

  if (!text) return treesList

  const filteredTrees = []

  treesList.forEach(tree => {
    const searchText = replaceSpecialCharacters(text).toLowerCase()
    const treeName = replaceSpecialCharacters(tree.nomecomum).toLowerCase()
    const scientificName = replaceSpecialCharacters(tree.nomesistematico).toLowerCase()
    const codes = replaceSpecialCharacters(tree.locations.map(x => x.codes.map(y => y)).join(' ')).toLowerCase()
    if (treeName.search(searchText) > -1 || scientificName.search(searchText) > -1 || codes.search(searchText) > -1) {
      filteredTrees.push(tree)
    }
  })

  return filteredTrees
}