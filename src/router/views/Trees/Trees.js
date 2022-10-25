﻿import { ref } from 'vue'

import _ from 'lodash'
import stringToSlug from '@/helpers/stringToSlug'

import loadXml from '@/helpers/loadXml'


export default {
  setup() {
    
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
    const trees = ref(_.chain(data)
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
      .value())

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

    const viewCodes = codes => {
      alert(codes)
    }

    return {
      data,
      trees,
      locations,
      viewCodes,
    }
  },
}