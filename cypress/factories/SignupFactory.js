
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {


    deliver:function(){


        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name:`${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            zap: '11999999999',
            address: {
                postalcode: '13010210',
                street: 'Rua Sacramento',
                number: '1000',
                details: 'apto 142',
                district: 'Centro',
                city_state: 'Campinas/SP'
    
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }

}