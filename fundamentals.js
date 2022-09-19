const aCar = {
    owner : "Joe Bloggs",
    type : {
      make : 'Toyota',
      model : 'Corolla' ,
      cc : '1.8'},
    registration : {
      year :'201',
      countycode : 'WD',
      number : '1058'
    },
    mileage : '10000',
    colour : {
      exterior : 'red',
      interiorfbric : {
        texture : 'leather',
        shade : 'cream'
      }

    }
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(aCar.registration.year + '-' + aCar.registration.countycode + '-' + aCar.registration.number)
  console.log('It is a ' + aCar.colour.exterior + ' car,' + aCar.mileage + ' mileage, with ' + aCar.colour.interiorfbric.texture + ' interior')
